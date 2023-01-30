import { Button } from '@mui/material';
import Cookies from 'js-cookie';
import { useAppContext } from 'providers/AppProvider';
import React from 'react';

export const Page2 = () => {
  const { updateAppContext } = useAppContext();
  return (
    <>
      <h1>Page 2</h1>
      <Button
        color='primary'
        onClick={() => {
          Cookies.remove('token');
          Cookies.remove('user');
          Cookies.remove('refresh-token');
          updateAppContext();
        }}
      >
        Log out
      </Button>
    </>
  );
};
