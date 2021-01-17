import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import HomePage from '../Components/HomePage/HomePage';
import AboutPage from '../Components/AboutPage/AboutPage';
import InelePage from '../Containers/InelePage/InelePage';

const Routes = () => {
    return(
        <>
            <Navbar/>
            <Route path="/" exact component={HomePage} />
            <Route path="/produse/inele"  component={InelePage} />
            <Route path="/produse/cercei"  component={()=>"cercei"} />
            <Route path="/produse/coliere"  component={()=>"coliere"} />
            <Route path="/produse/brose"  component={()=>"brose"} />
            <Route path="/produse/bratari"  component={()=>"bratari"} />
            <Route path="/produse/pandantive"  component={()=>"pandantive"} />
            <Route path="/despre"  component={AboutPage} />
            <Route path="/cos"  component={()=>"cos"} />
        </>
    );
}

export default Routes;