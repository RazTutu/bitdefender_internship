import React from 'react';
import './Footer.css';
import logo_image from '../../Images/bitdefender_brand.jpg';

const footer = props => {
    return(
        <React.Fragment>
            <div className="footer">
                <div className="footer__logo">
                    <img src={logo_image} alt="Bitdefender brand" class="footer__logo-image"/>
                </div>
                <div className="footer__info">
                    <h1>Bitdefender</h1>
                </div>
            </div>
        </React.Fragment>
    );
}

export default footer;