import React from 'react'
import "./footer.css";


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">OnyxCodes</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer_link">Portfolio</a>
                </li>
                <li>
                    <a href="#services" className="footer_link">Services</a>
                </li>
            </ul>

            <div className="footer_social">
               <a href="https://x.com/bigharrr?s=21" className="footer_social-link" target='blank'><i className="uil uil-twitter"></i></a>
               <a href="https://github.com/coderQoce" className="footer_social-link" target='blank'><i className="uil uil-github"></i></a>
               <a href="https://www.linkedin.com/in/oke-quadri-3068b0243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="footer_social-link" target='blank'><i className="uil uil-linkedin"></i></a>
            </div>

            <span className="footer_copy">
                &#169; OnyxCode. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer