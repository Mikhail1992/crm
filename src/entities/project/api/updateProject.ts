import httpRequest from 'shared/api/request';
import { IProjectUpdateDto, IProject } from './types';

export const updateProject = async (id: string, dto: IProjectUpdateDto) => {
  const { data } = await httpRequest.patch<IProject>(`projects/${id}`, dto);
  return data;
};
