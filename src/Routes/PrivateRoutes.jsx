import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Vortex } from 'react-loader-spinner';
import { AuthContext } from '../Providers/AuthProvider';



const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	console.log(loading);
	if (loading) {
		return (
			<div className="flex justify-center items-center">
				<Vortex
					visible={true}
					height="80"
					width="80"
					ariaLabel="vortex-loading"
					wrapperStyle={{}}
					wrapperClass="vortex-wrapper"
					colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
				/>
			</div>
		);
	}

	if (user && user.uid) {
		return children;
	}
	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;