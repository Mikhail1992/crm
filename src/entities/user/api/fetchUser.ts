import httpRequest from 'shared/api/request';
import { IUser } from './types';

export const fetchUser = async (id: string): Promise<IUser> => {
  const { data } = await httpRequest.get<IUser>(`users/${id}`);
  return data;
};
