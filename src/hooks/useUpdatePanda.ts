import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Panda } from '../types/Panda';

const useUpdatePanda = () => {
  const queryCache = useQueryClient();
  return useMutation({
    mutationFn: (panda: Panda) =>
      axios
        .put(`http://localhost:3004/pandas/${panda.id}`, panda)
        .then((response) => response.data),

    onSuccess: () => {
      queryCache.invalidateQueries({ queryKey: ['pandas'] });
    },
  });
};

export default useUpdatePanda;
