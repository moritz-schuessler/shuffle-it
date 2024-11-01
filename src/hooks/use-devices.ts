import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getDevices } from '@/lib/spotify-api';
import { getSession } from 'next-auth/react';

const useDevices = () => {
  const queryClient = useQueryClient();

  const response = useQuery({
    queryKey: ['devices'],
    queryFn: () => queryFunction(),
    initialData: [],
  });

  const activeDevice = queryClient.getQueryData(['selected-device']);

  if (response.isSuccess && !activeDevice) {
    queryClient.setQueryData(
      ['selected-device'],
      () => response.data?.find((device) => device.is_active)?.id,
    );
  }

  if (response.data.length === 1) {
    queryClient.setQueryData(['selected-device'], () => response.data[0].id);
  }

  return response;
};

const queryFunction = async () => {
  const session = await getSession();

  if (!session) {
    throw new Error('No Session');
  }

  if (Date.now() >= session.expires_at) {
    throw new Error('Access Token is invalid');
  }

  return (await getDevices(session.access_token)).devices;
};

export default useDevices;
