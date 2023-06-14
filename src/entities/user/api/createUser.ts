import httpRequest from 'shared/api/request';
import { IUser, IUserCreateDto } from './types';

export const createUser = async (dto: IUserCreateDto) => {
  const { data } = await httpRequest.post<IUser>('users', dto);
  return data;
};
