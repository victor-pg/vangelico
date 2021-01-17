import React from 'react';
import "./AboutPage.scss";

const AboutPage =()=>{
    return (
        <div className="content">
            <div className="about-text">
				<p>Despre noi</p>
				<p>Fondat in 1924</p>
				<p>
					Povestea Vangelico® Fine Jewelry a început în 1924, când Michael de Vanta și Ben Gelico au deschis primul magazin de vânzare cu amănuntul Vangelico Fine Jewelry în Los Santos, California. Împreună cu oferirea de mărfuri de înaltă calitate la cele mai mici prețuri, magazinul a oferit un plan revoluționar de credit „un ban în jos și un dolar pe săptămână” pentru multe articole la prețuri mai mari. Această strategie de marketing s-a dovedit a fi de succes și, însoțită de un serviciu de clienți excepțional oferit de angajați dedicați, a dus la extinderea bijutierului în 12 magazine din alte state până în 1941.</p>
			</div>
			<div className="about-image">
				<img src={process.env.PUBLIC_URL + '/img/diamond.png'} alt="diamond"/>
			</div>
        </div>
    );
}

export default AboutPage;