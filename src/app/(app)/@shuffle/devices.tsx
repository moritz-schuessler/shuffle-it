'use client';

import { useQueryClient } from '@tanstack/react-query';

import { Select, SelectItem } from '@/components/ui/select';
import useDevices from '@/hooks/use-devices';
import useSelectedDevice from '@/hooks/use-selected-device';

const Devices = () => {
  const queryClient = useQueryClient();

  const { data: devices, isFetching } = useDevices();
  const { data: selectedDevice } = useSelectedDevice();

  return (
    <Select
      placeholder='Choose a Device...'
      {...(selectedDevice ? { value: selectedDevice } : null)}
      onValueChange={(newActive) => {
        queryClient.setQueryData(['selected-device'], () => newActive);
      }}
      name='selected-device'
      required
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

export default Devices;
