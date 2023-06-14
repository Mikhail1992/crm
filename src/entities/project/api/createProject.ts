import httpRequest from 'shared/api/request';
import { IProjectCreateDto, IProject } from './types';

export const createProject = async (dto: IProjectCreateDto) => {
  const { data } = await httpRequest.post<IProject>('projects', dto);
  return data;
};
