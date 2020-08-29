import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="text-center main-footer">
            <div className='container d-flex footer'>
                <a href="/header" className="mr-auto p-2" style={{textDecoration: 'none'}}>@ 2020 GetRecipes.com</a>
                <div className="p-2 link-last">
                    <a href="/privacy">Privacy</a>
                    <a href="/license">License</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </div>
            <div style={{marginBottom: '25px'}}>
                <a href="/"  style={{textDecoration: 'none'}}>© copy right@2020 - mmhk</a>
            </div>    
        </div>
    );
};

export default Footer;