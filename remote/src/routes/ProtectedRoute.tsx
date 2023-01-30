import { useAppContext } from 'providers/AppProvider';
import { Navigate } from 'react-router-dom';

interface ProtectedRoutePropTypes {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRoutePropTypes) => {
  const { isLoggedIn } = useAppContext();
  if (!isLoggedIn) {
    return <Navigate to='/' replace />;
  }
  return children;
};
