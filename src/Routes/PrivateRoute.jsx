import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <h1 className='text-md'>Loading...</h1>
    }
    if(!user){
        toast.error('Please login first!')
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children; 
};

export default PrivateRoute;