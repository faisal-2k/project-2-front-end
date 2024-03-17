import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import useManager from '../../hooks/useManager';
import Loading from '../../components/Loading';

const RequireManager = ({children}) => {
  const [user, loading, error] = useAuthState(auth);
  const [manager, isLoading] = useManager(user);

    const location = useLocation();  

  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  
  

if (!user || !manager) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
}

return children;
    
};
export default RequireManager;