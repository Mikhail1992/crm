export interface IProject {
  id: string;
  name: string;
  description: string;
}

export interface IProjectCreateDto {
  name: string;
  description: string;
}

export interface IProjectUpdateDto {
  name: string;
  description: string;
}

export interface IProjectArgs {
  skip: number;
  take: number;
}
