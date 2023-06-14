import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import {
  IUserArgs,
  IUserCreateDto,
  fetchUsers,
  createUser,
  IUser,
} from '../api';

interface UserState {
  loading: boolean;
  error: string;
  users: IUser[];
  fetchUsers: (args: IUserArgs) => void;
  createUser: (data: IUserCreateDto) => void;
}

export const useUsersStore = create(
  devtools(
    immer<UserState>((set) => ({
      loading: false,
      error: '',
      users: [],
      fetchUsers: async (args: IUserArgs) => {
        try {
          set({ loading: true });
          const users = await fetchUsers(args);
          set((state) => {
            state.users = users;
            state.loading = false;
          });
        } catch (error: any) {
          set((state) => {
            state.error = error.message;
          });
        }
      },
      createUser: async (data: IUserCreateDto) => {
        const newUser = { id: uuidv4(), ...data };
        try {
          set((state) => {
            state.users.push(newUser);
          });
          // const user = await createUser(data);
          // set((state) => state.users.push(user));
        } catch (error: any) {
          set((state) => {
            state.error = error.message;
            state.users = state.users.filter((user) => user.id !== newUser.id);
          });
        }
      },
    })),
    { name: 'users' }
  )
);
