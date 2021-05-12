import { TypeResort } from "./types";

const HOST = "http://localhost:5000";
const getUrl = `${HOST}/api/getinfo/all`;

export const getAllResorts = () => {
    return new Promise<TypeResort[]>((resolve, reject) => {
        fetch(getUrl).then((response) => {
            return resolve(response.json());
        },
        (error) => {
          return reject(error);
        })
    });
};
