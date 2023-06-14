export interface IProject {
  id: string;
  name: string;
}

export interface IProjectCreateDto {
  name: string;
}

export interface IProjectUpdateDto {
  name: string;
}

export interface IProjectArgs {
  skip: number;
  take: number;
}
