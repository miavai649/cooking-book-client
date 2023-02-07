import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import MyFooter from '../Shared/MyFooter/MyFooter';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <MyFooter></MyFooter>
        </div>
    );
};

export default Main;