import { TypeResort } from '../components/InfoBlock/types';

const url = `/api/getinfo/all`;

export const getAllResortsApi = () => {
  return new Promise<TypeResort[]>((resolve, reject) => {
    fetch(url).then(
      (response) => {
        return resolve(response.json());
      },
      (error) => {
        return reject(error);
      }
    );
  });
};
