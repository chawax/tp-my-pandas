import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Panda } from '../types/Panda';

const usePanda = (key: string) => {
  return useQuery<Panda, Error>({
    queryKey: ['pandas', key],
    queryFn: () =>
      axios
        .get(`http://localhost:3004/pandas/${key}`)
        .then((result) => result.data),
  });
};

export default usePanda;
