import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPage, signOut } from '../actions';
import { type } from '../actions/types';

interface ProtectedRouteProps {
    isSignedIn: boolean;
    redirectPath?: string;
    page?: string;
    setPage: (page: string) => void;
    children?: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    isSignedIn,
    redirectPath = '/welcome',
    page = type.PAGE_HOME,
    setPage,
    children = null,
}) => {
    if (!isSignedIn) {
        setPage(page);
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default connect(null, { setPage, signOut })(ProtectedRoute);
