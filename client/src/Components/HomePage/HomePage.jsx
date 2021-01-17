import React from 'react';
import {Link} from "react-router-dom";
import "./HomePage.scss";

const HomePage = ()=>{
    return(
        <div className="content">
            <div className="introduction">
				<div className="introduction-text">
					<h1>Disney Belle <br/> Ring </h1>
					<p>
						Va propunem acest inel minunat de trandafir diamant din Colecția de bijuterii Disney fermecată inspirată de Belle.</p>
						<Link to="produse/inele"><button>VEZI MAI MULTE</button></Link>
				</div>
				<div className="introduction-image">
					<img src={process.env.PUBLIC_URL + '/img/home.png'} alt="inel" />
				</div>
			</div>
        </div>
    );
}

export default HomePage;