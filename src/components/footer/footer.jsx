import React from 'react';
import "./footer.css";

const Footer = () => {
    const handleFooterNav = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            // Check if we're on mobile (header at bottom)
            const isMobile = window.innerWidth <= 768;
            let headerHeight = 0;

            if (isMobile) {
                // On mobile, header is at bottom, so no offset needed
                headerHeight = 0;
            } else {
                // On desktop, header is at top, so account for its height
                headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            }

            const elementPosition = element.offsetTop - headerHeight - 20;

            // Use instant scroll to prevent jumping
            window.scrollTo(0, elementPosition);
        }
    };

    return (
        <footer className="footer">
            <div className="footer_bg">
                <div className="footer_container container grid">
                    <div className="footer_title_section">
                        <h1 className="footer_title">OnyX</h1>
                        <span className="footer_subtitle">Frontend Developer</span>
                    </div>

                    <ul className="footer_list">
                        <li>
                            <a href="#about" onClick={(e) => handleFooterNav(e, '#about')} className="footer_link">About</a>
                        </li>
                        <li>
                            <a href="#portfolio" onClick={(e) => handleFooterNav(e, '#portfolio')} className="footer_link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#services" onClick={(e) => handleFooterNav(e, '#services')} className="footer_link">Services</a>
                        </li>
                    </ul>

                    <div className="footer_socials">
                        <a href="https://www.instagram.com/onyx_quadir/" target="_blank" rel="noopener noreferrer" className="footer_social">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://twitter.com/QuadriOke" target="_blank" rel="noopener noreferrer" className="footer_social">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                        <a href="https://github.com/OnyXdev" target="_blank" rel="noopener noreferrer" className="footer_social">
                            <i className="uil uil-github-alt"></i>
                        </a>
                    </div>
                </div>

                <p className="footer_copy">&#169; OnyX. All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;