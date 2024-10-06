import { useQuery, useQueryClient } from '@tanstack/react-query';

import getDevices from '@/lib/spotify/get-devices';

const useDevices = () => {
  const queryClient = useQueryClient();

  const response = useQuery({
    queryKey: ['devices'],
    queryFn: () => getDevices(),
    initialData: [],
  });

  const activeDevice = queryClient.getQueryData(['selected-device']);

  if (response.isSuccess && !activeDevice) {
    queryClient.setQueryData(
      ['selected-device'],
      () => response.data?.find((device) => device.is_active)?.id,
    );
    queryClient.invalidateQueries({ queryKey: ['selected-device'] });
  }

  if (response.data.length === 1) {
    queryClient.setQueryData(['selected-device'], () => response.data[0].id);
    queryClient.invalidateQueries({ queryKey: ['selected-device'] });
  }

  return response;
};

export default useDevices;
