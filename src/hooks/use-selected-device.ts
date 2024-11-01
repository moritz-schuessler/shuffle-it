import { useQuery } from '@tanstack/react-query';

const useSelectedDevice = () => {
  return useQuery({
    queryKey: ['selected-device'],
    initialData: null,
  });
};

export default useSelectedDevice;
