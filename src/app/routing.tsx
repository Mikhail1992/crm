import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BaseLayout } from './layouts/baseLouout';

const Users = lazy(() => import('pages/users'));
const User = lazy(() => import('pages/user'));
const Project = lazy(() => import('pages/project'));
const Projects = lazy(() => import('pages/projects'));
const ActionsPanel = lazy(() => import('pages/actionsPanel'));
const ErrorPage = lazy(() => import('pages/error'));

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/actions-panel',
        element: <ActionsPanel />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <User />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/projects/:id',
        element: <Project />,
      },
    ],
  },
]);

export const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
