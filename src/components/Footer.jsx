import React from 'react';
import '../style/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareInstagram, faSquareFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import logoFooter from '../assets/imgs/logo-1.png';

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className='footer-wrapper'>
            <div className="footer-icons-wrapper">
                <FontAwesomeIcon icon={faLinkedin} className='footer-icon' />
                <FontAwesomeIcon icon={faSquareInstagram} className='footer-icon' />
                <FontAwesomeIcon icon={faSquareFacebook} className='footer-icon' />
                <FontAwesomeIcon icon={faTiktok} className='footer-icon' />
            </div>
            <div className="footer-logo">
                <img src={logoFooter} alt="Logo reads CJ Fitness Instructor" />
            </div>
        </div>
        {/* color gradient */}
        <div className="blur footer-blur-left"></div>
        <div className="blur footer-blur-right"></div>
    </div>
  )
}

export default Footer