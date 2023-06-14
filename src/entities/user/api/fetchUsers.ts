import httpRequest from 'shared/api/request';
import { IUserArgs, IUser } from './types';

export const fetchUsers = async (params: IUserArgs): Promise<IUser[]> => {
  const { data } = await httpRequest.get<IUser[]>('users', {
    params,
  });
  return data;
};
