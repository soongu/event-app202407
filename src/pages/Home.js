import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {

  return (
    <>
      <h1>My Home Page</h1>
      <Outlet />
    </>
  );
};

export default Home;
