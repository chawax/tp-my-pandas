import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Panda } from '../../types/Panda';

const useCreatePanda = () => {
  const queryCache = useQueryClient();

  return useMutation(
    (panda: Panda) =>
      axios
        .post('http://localhost:3004/pandas', {
          name: panda.name,
          interests: panda.interests,
          image: panda.image,
        })
        .then((response) => response.data),
    {
      onSuccess: () => {
        queryCache.invalidateQueries('pandas');
      },
    },
  );
};

export default useCreatePanda;
