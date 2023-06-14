import httpRequest from 'shared/api/request';
import { IProjectArgs, IProject } from './types';

export const fetchProjects = async (
  params: IProjectArgs
): Promise<IProject[]> => {
  const { data } = await httpRequest.get<IProject[]>('projects', {
    params,
  });
  return data;
};
