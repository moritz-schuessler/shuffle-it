'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import { Select, SelectItem } from '@/components/ui/select';
import useDevices from '@/hooks/use-devices';

const ActiveDevice = () => {
  const queryClient = useQueryClient();

  const { data: devices, isFetching } = useDevices();
  const { data: activeDevice } = useQuery({
    queryKey: ['active-device'],
    initialData: null,
  });

  return (
    <Select
      placeholder='Choose a Device...'
      {...(activeDevice ? { value: activeDevice } : null)}
      onValueChange={(newActive) => {
        queryClient.setQueryData(['active-device'], () => newActive);
        queryClient.invalidateQueries({ queryKey: ['active-device'] });
      }}
      disabled={isFetching}
    >
      {devices!.map((device) => (
        <SelectItem key={device.id} value={device.id}>
          {device.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default ActiveDevice;
