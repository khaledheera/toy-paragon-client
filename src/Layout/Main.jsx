import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div>
				<Header />
			</div>
			<div>
				<Outlet />
			</div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Main;