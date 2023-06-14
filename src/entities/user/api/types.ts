export interface IUser {
  id: string;
  name: string;
}

export interface IUserCreateDto {
  name: string;
}

export interface IUserUpdateDto {
  name: string;
}

export interface IUserArgs {
  skip: number;
  take: number;
}
