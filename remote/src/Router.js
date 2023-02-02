import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
// import { Link, Route, Router } from 'react-router-dom';

function RouterComponent() {
  return (
    <>
      <h1 className='color-green'>App</h1>
      <Link to={'/page1'}>Page 1</Link>
      <Link to={'/page2'}>Page 1</Link>
      <Router>
        <Route path='/page1' element={<h1>Page 1 from remote</h1>}></Route>
        <Route path='/page2' element={<h1>Page 2 from remote</h1>}></Route>
      </Router>
    </>
  );
}

export default RouterComponent;