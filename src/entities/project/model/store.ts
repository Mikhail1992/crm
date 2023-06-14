import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import {
  IProjectArgs,
  IProjectCreateDto,
  IProjectUpdateDto,
  fetchProjects,
  createProject,
  IProject,
  updateProject,
} from '../api';

interface ProjectState {
  loading: boolean;
  error: string;
  projects: IProject[];
  fetchProjects: (args: IProjectArgs) => void;
  createProject: (data: IProjectCreateDto) => void;
}

export const useProjectsStore = create(
  devtools(
    immer<ProjectState>((set) => ({
      loading: false,
      error: '',
      projects: [],
      fetchProjects: async (args: IProjectArgs) => {
        try {
          set({ loading: true });
          const projects = await fetchProjects(args);
          set((state) => {
            state.projects = projects;
            state.loading = false;
          });
        } catch (error: any) {
          set((state) => {
            state.error = error.message;
          });
        }
      },
      createProject: async (data: IProjectCreateDto) => {
        const newProject = { id: uuidv4(), ...data };
        try {
          set((state) => {
            state.projects.push(newProject);
          });
          // const project = await createProject(data);
          // set((state) => state.projects.push(project));
        } catch (error: any) {
          set((state) => {
            state.error = error.message;
            state.projects = state.projects.filter(
              (project) => project.id !== newProject.id
            );
          });
        }
      },
      updateProject: async (id: string, data: IProjectUpdateDto) => {
        try {
          const project = await updateProject(id, data);
          set((state) => ({
            projects: state.projects.map((p) => {
              if (p.id === id) {
                return { ...p, ...project };
              }
              return p;
            }),
          }));
        } catch (error: any) {
          set((state) => {
            state.error = error.message;
          });
        }
      },
    })),
    { name: 'projects' }
  )
);
