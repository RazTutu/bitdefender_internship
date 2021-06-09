import React from 'react';
import './Footer.css';
import logo_image from '../../Images/bitdefender-dog.jpg';

const footer = props => {
    return(
        <React.Fragment>
            <div className="footer">
                <div className="footer__logo">
                    <img src={logo_image} alt="Bitdefender brand" class="footer__logo-image"/>
                </div>
                <div className="footer__info">
                    <h1>Bitdefender</h1>
                    <h2>Copyright reserved.</h2>
                </div>
            </div>
        </React.Fragment>
    );
}

export default footer;