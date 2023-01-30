import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import { DwollaCustomer } from 'graphql-client/types/graphql.models';
import { getJwtExpirationDate } from 'helpers/utils/getJwtExpirationDate';
import { SnackbarProvider } from 'notistack';
import { MAX_SNACK_NOTIFICATION } from 'helpers/constants';

interface User {
  id: number;
  firstname: string;
  lastname: string;
  profileImage: string;
  marketplaceFullAccess: boolean;
  email: string;
  birthDate: string;
  dwollaCustomer: DwollaCustomer;
}

interface AppContextType {
  isLoggedIn: boolean;
  token?: string;
  currentUser: User | null;
  updateAppContext: () => void;
  updateDwollaCustomerData: (dwollaCustomer: DwollaCustomer) => void;
}

interface AppWrapperType {
  children: JSX.Element;
  isPrivateRoute: string | boolean | undefined;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

const setUserObj = () => {
  const userCookie = Cookie.get('user');
  if (userCookie) {
    return JSON.parse(atob(userCookie));
  } else {
    return null;
  }
};

export const AppWrapper = ({ children }: AppWrapperType) => {
  const [token, setToken] = useState<string | undefined>(Cookie.get('token') || undefined);
  const [currentUser, setCurrentUser] = useState<User | null>(() => setUserObj());
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const tokenCookie = Cookie.get('token');
    const userCookie = Cookie.get('user');
    return !!tokenCookie && !!userCookie;
  });

  useEffect(() => {
    updateAppContext();
  }, [Cookie.get('token'), Cookie.get('user')]);

  const updateDwollaCustomerData = (dwollaCustomer: DwollaCustomer) => {
    const tokenExpDate = getJwtExpirationDate(Cookie.get('token'));
    const refreshTokenExpDate = getJwtExpirationDate(Cookie.get('refresh-token'));

    Cookie.set('user', btoa(JSON.stringify({ ...currentUser, dwollaCustomer })), {
      expires: refreshTokenExpDate || tokenExpDate,
    });
    updateAppContext();
  };

  const updateAppContext = () => {
    const tokenCookie = Cookie.get('token');
    const userCookie = Cookie.get('user');

    if (tokenCookie) {
      setToken(tokenCookie);
    } else {
      setToken(undefined);
    }

    const userObj = setUserObj();
    setCurrentUser(userObj);

    setIsLoggedIn(Boolean(tokenCookie && userCookie));
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        token,
        currentUser,
        updateAppContext: updateAppContext,
        updateDwollaCustomerData,
      }}
    >
      <SnackbarProvider maxSnack={MAX_SNACK_NOTIFICATION}>{children}</SnackbarProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
