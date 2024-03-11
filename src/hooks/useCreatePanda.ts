import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { CreatePanda } from '../types/CreatePanda';

const useCreatePanda = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (panda: CreatePanda) =>
      axios
        .post('http://localhost:3004/pandas', {
          name: panda.name,
          interests: panda.interests,
          image: panda.image,
        })
        .then((response) => response.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pandas'] });
    },
  });
};

export default useCreatePanda;
