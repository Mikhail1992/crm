import { Suspense } from 'react';
import './index.css';
import Routing from 'pages/index';

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routing />
    </Suspense>
  );
};
