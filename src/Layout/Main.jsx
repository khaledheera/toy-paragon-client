import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div>
				<Header />
			</div>
			<div>
				<Outlet />
			</div>
        </div>
    );
};

export default Main;