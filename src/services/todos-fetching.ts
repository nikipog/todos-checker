import { AxiosInstance } from 'axios';
import { createApi } from '../api/api';
import { Todo } from '../types/todo';

const api: AxiosInstance = createApi();

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await api.get<Todo[]>('/todos');
  return response.data;
};
