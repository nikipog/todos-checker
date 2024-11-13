import axios, { AxiosInstance } from 'axios';

const enum Default {
  BaseUrl = 'https://jsonplaceholder.typicode.com',
  Timeout = 10000,
}

export const createApi = (): AxiosInstance => {
  return axios.create({
    baseURL: Default.BaseUrl as string,
    timeout: Default.Timeout as number,
  });
};
