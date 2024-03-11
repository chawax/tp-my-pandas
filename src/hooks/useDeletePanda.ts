import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const useDeletePanda = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      axios
        .delete(`http://localhost:3004/pandas/${id}`)
        .then((response) => response.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pandas'] });
    },
  });
};

export default useDeletePanda;
