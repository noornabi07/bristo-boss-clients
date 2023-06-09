import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hook/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin()

    if(loading || isAdminLoading){
       return <div className='w-32 mx-auto my-8'>
            <button className="btn loading">loading</button>
        </div>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;