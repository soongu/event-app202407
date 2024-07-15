import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { useRouteLoaderData } from 'react-router-dom';
import Main from '../components/Main';

const WelcomePage = () => {

  const userData = useRouteLoaderData('user-data-loader');
  // console.log('abc: ', abc);

  let token;
  if (userData) {
    token = userData.token;
  }

  return (
    <>
      {!token && <LoginForm />}
      {token && <Main />}
    </>
  );
};

export default WelcomePage;
