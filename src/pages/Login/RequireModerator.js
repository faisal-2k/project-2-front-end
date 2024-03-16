import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useModerator from '../hooks/useModerator';
import { Navigate, useLocation } from 'react-router-dom';
import Verifying from '../Loading/Verifying';
import { signOut } from 'firebase/auth';

const RequireModerator = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [moderator, isLoadingModerator] = useModerator(user);

    const location = useLocation();  

  if (loading || isLoadingModerator) {
    return <Verifying></Verifying>;
  }
  
  

if (!user || !moderator) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
}

return children;
    
};
export default RequireModerator;