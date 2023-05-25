import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import NavBar from '../components/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {/* { noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>} */}


             <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>


        </div>
    );
};

export default Main;