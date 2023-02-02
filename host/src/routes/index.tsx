import withSuspense from 'helpers/hoc/withSuspense';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
const RemoteHome = withSuspense(React.lazy(() => import('@remote/App')));

const Router = () => {
  return (
    <>
      <h1>This is the Container App</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/remote'>Click to load Remote App (error here)</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<h1 >Home</h1>} />
        <Route path='/remote' element={<h1 >Remote</h1>} /><Route path='/remote' element={<h1 >Remote</h1>} />
      </Routes>
      <React.Suspense fallback={<h4>Loading...</h4>}>
        <RemoteHome />
      </React.Suspense>
    </>
  );
};

export default Router;
