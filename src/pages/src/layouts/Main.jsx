
import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderIndex from '../components/header/HeaderIndex';
import Footer from '../components/footer/Footer';

function Main() {


    return (
        <main className="overflow-x-hidden">
            <HeaderIndex/>
            <Outlet />
            <Footer/>
        </main>

    );
}

export default Main;
