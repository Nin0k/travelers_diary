import { TypeResort } from './types';

const url = `/api/getinfo/all`;

export const getAllResorts = () => {
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
