import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer"
import ScrollButton from "./ScrollButton"

const Layout = () => {
    return (
        <div>
            <Header/>
            <main>
            <Outlet/>
            <Footer/>
            <ScrollButton/>
            </main>
         
        </div>
    );
};

export default Layout;