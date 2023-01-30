import withSuspense from 'helpers/hoc/withSuspense';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
const Home = withSuspense(React.lazy(() => import('../screens/Home')));
const Dashboard = withSuspense(React.lazy(() => import('../screens/Dashobard')));
const Page2 = withSuspense(React.lazy(() => import('../screens/Page2')));

const Router = () => {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Remote Home</Link>
        </li>
        <li>
          <Link to='/page1'>Page 1</Link>
        </li>
        <li>
          <Link to='/page2'>Page 2 (Login to view this page)</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page1' element={<Dashboard />} />
        <Route
          path='/page2'
          element={
            <ProtectedRoute>
              <Page2 />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
