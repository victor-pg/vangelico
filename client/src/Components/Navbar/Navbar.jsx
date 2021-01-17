import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar">
            <ul className="nav-list">
                <li><Link to="/"><img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo"/></Link></li>
                <li><Link to="/produse/inele">INELE</Link></li>
                <li><Link to="/produse/cercei">CERCEI</Link></li>
                <li><Link to="/produse/coliere">COLIERE</Link></li>
                <li><Link to="/produse/brose">BROSE</Link></li>
                <li><Link to="/produse/bratari">BRATARI</Link></li>
                <li><Link to="/produse/pandantive">PANDANTIVE</Link></li>
                <hr className="delimitator"/>
                <li><Link to="/despre">DESPRE NOI</Link></li>
                <li><Link to="/cos">COS</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;