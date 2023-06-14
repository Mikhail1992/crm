import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BaseLayout } from 'app/layouts/baseLouout';

const Users = lazy(() => import('pages/users'));
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
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
