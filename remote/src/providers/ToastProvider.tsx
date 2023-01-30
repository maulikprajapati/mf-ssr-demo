import { default as MuiIconButton } from '@mui/material/IconButton';
import { Alert, AlertColor, Box, Snackbar, SnackbarCloseReason, styled } from '@mui/material';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import {
  ExclamationCircleOutlineIcon,
  InfoOutlineIcon,
  SuccessCircleOutlineIcon,
  XOutlineIcon,
  WarningIcon,
} from 'ui/icons';

export interface ToastOptions {
  type: AlertColor;
  disableAutoClose?: boolean;
  extraActions?: ReactNode;
}

export type OpenToastFunc = (message?: string, options?: ToastOptions | undefined) => void;

interface IToastContext {
  openToast: OpenToastFunc;
  closeToast: () => void;
}
const ToastContext = createContext<IToastContext>({} as IToastContext);
export const useToast = () => useContext(ToastContext);

const SnackbarToast = styled(Snackbar)(() => ({
  minWidth: '60%',
  '&.MuiSnackbar-root': {
    backgroundColor: 'transparent',
    padding: 0,
  },
  '.MuiAlert-message': {
    fontSize: '.875rem',
  },
  '.extra-action-box': {
    display: 'flex',
    alignItems: 'center',
  },
}));

// Provider
interface ToastProviderProps {
  children?: ReactNode;
}

const icons: { [key: string]: ReactNode } = {
  success: <SuccessCircleOutlineIcon />,
  info: <InfoOutlineIcon />,
  warning: <WarningIcon />,
  error: <ExclamationCircleOutlineIcon />,
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [options, setOptions] = useState<ToastOptions>({ type: 'error', disableAutoClose: false });

  const openToast: OpenToastFunc = (message = 'Something went wrong...', options) => {
    setMessage(message);
    if (options) {
      setOptions(options);
    } else {
      setOptions({ type: 'error', disableAutoClose: false });
    }
    setIsActive(true);
  };

  const closeToast = () => {
    setIsActive(false);
    setMessage('');
  };

  const handleClose = (event: Event | React.SyntheticEvent, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    closeToast();
  };

  const toastType = options?.type || 'error';

  return (
    <ToastContext.Provider
      value={{
        openToast,
        closeToast,
      }}
    >
      {children}

      <SnackbarToast
        open={isActive}
        autoHideDuration={options?.disableAutoClose ? null : 5000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert
          action={
            <Box className='extra-action-box'>
              {options?.extraActions || null}
              <MuiIconButton
                id='toast-close-button'
                size='small'
                aria-label='close'
                color='inherit'
                onClick={() => {
                  closeToast();
                }}
              >
                <XOutlineIcon fontSize='small' />
              </MuiIconButton>
            </Box>
          }
          severity={toastType}
          sx={{ width: '100%' }}
          icon={icons[toastType]}
        >
          {message}
        </Alert>
      </SnackbarToast>
    </ToastContext.Provider>
  );
};
