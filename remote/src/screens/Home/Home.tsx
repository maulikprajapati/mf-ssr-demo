import { Button } from '@mui/material';
import Cookies from 'js-cookie';
import { useAppContext } from 'providers/AppProvider';
import { useToast } from 'providers/ToastProvider';
import React from 'react';

export const HomeScreen = () => {
  const { openToast } = useToast();
  const { updateAppContext, isLoggedIn } = useAppContext();

  return (
    <>
      <h1>Remote Home Page</h1>
      {!isLoggedIn ? (
        <Button
          color='primary'
          onClick={() => {
            Cookies.set('token', 'test token');
            Cookies.set('refresh-token', 'test refresh token');
            Cookies.set('user', btoa(JSON.stringify({ userId: 123 })));
            updateAppContext();
          }}
        >
          Login
        </Button>
      ) : null}
      {isLoggedIn ? (
        <Button
          color='primary'
          onClick={() => {
            Cookies.remove('token');
            Cookies.remove('refresh-token');
            Cookies.remove('user');
            updateAppContext();
          }}
        >
          Log out
        </Button>
      ) : null}
      <Button
        color='primary'
        onClick={() => {
          openToast('Test', { type: 'success' });
        }}
      >
        Click to open toaster
      </Button>
    </>
  );
};
