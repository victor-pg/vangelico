import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import HomePage from '../Components/HomePage/HomePage';
import AboutPage from '../Components/AboutPage/AboutPage';
import InelePage from '../Containers/InelePage/InelePage';
import CerceiPage from '../Containers/CerceiPage/CerceiPage';
import ColierePage from '../Containers/ColierePage/ColierePage';
import BrosePage from '../Containers/BrosePage/BrosePage';
import BratariPage from '../Containers/BratariPage/BratariPage';
import PandantivePage from '../Containers/PandantivePage/PandantivePage';
import CartPage from '../Containers/CartPage/CartPage';

const Routes = () => {
    return(
        <>
            <Navbar/>
            <Route path="/" exact component={HomePage} />
            <Route path="/produse/inele"  component={InelePage} />
            <Route path="/produse/cercei"  component={CerceiPage} />
            <Route path="/produse/coliere"  component={ColierePage} />
            <Route path="/produse/brose"  component={BrosePage} />
            <Route path="/produse/bratari"  component={BratariPage} />
            <Route path="/produse/pandantive"  component={PandantivePage} />
            <Route path="/despre"  component={AboutPage} />
            <Route path="/cos"  component={CartPage} />
        </>
    );
}

export default Routes;