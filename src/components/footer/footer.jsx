import React from 'react';
import "./footer.css";

const Footer = () => {
    const handleFooterNav = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const elementPosition = element.offsetTop - headerHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer_container">
                {/* Main Footer Content */}
                <div className="footer_main">
                    {/* Brand Section */}
                    <div className="footer_section footer_brand">
                        <div className="footer_brand-header">
                            <h2 className="footer_title">OnyX</h2>
                            <span className="footer_subtitle">Frontend Developer</span>
                        </div>
                        <p className="footer_description">
                            Crafting exceptional digital experiences with modern web technologies.
                        </p>
                        <div className="footer_socials">
                            <a
                                href="https://x.com/bigharrr?s=21"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer_social"
                                aria-label="Twitter"
                            >
                                <i className="uil uil-twitter-alt"></i>
                            </a>
                            <a
                                href="https://github.com/coderQoce"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer_social"
                                aria-label="GitHub"
                            >
                                <i className="uil uil-github-alt"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/oke-quadri-3068b0243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer_social"
                                aria-label="LinkedIn"
                            >
                                <i className="uil uil-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="footer_section">
                        <h3 className="footer_section-title">Navigation</h3>
                        <ul className="footer_links">
                            <li>
                                <a href="#home" onClick={(e) => handleFooterNav(e, '#home')} className="footer_link">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={(e) => handleFooterNav(e, '#about')} className="footer_link">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" onClick={(e) => handleFooterNav(e, '#portfolio')} className="footer_link">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleFooterNav(e, '#services')} className="footer_link">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={(e) => handleFooterNav(e, '#contact')} className="footer_link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="footer_section">
                        <h3 className="footer_section-title">Services</h3>
                        <ul className="footer_links">
                            <li>
                                <a href="#services" onClick={(e) => handleFooterNav(e, '#services')} className="footer_link">
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleFooterNav(e, '#services')} className="footer_link">
                                    App Development
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleFooterNav(e, '#services')} className="footer_link">
                                    Website Revamping
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={(e) => handleFooterNav(e, '#services')} className="footer_link">
                                    Responsive Website Creation
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="footer_section">
                        <h3 className="footer_section-title">Contact</h3>
                        <div className="footer_contact">
                            <div className="footer_contact-item">
                                <i className="uil uil-envelope footer_contact-icon"></i>
                                <span>Okequadri23@gmail.com</span>
                            </div>
                            <div className="footer_contact-item">
                                <i className="uil uil-map-marker footer_contact-icon"></i>
                                <span>Ibadan, Nigeria</span>
                            </div>
                            <div className="footer_contact-item">
                                <i className="uil uil-phone footer_contact-icon"></i>
                                <span>07044966950</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer_bottom">
                    <div className="footer_bottom-content">
                        <p className="footer_copy">
                            &#169; {currentYear} OnyX. All rights reserved.
                        </p>
                        {/* <div className="footer_bottom-links">
                            <button className="footer_bottom-link" onClick={() => alert('Privacy Policy - Coming Soon')}>
                                Privacy Policy
                            </button>
                            <button className="footer_bottom-link" onClick={() => alert('Terms of Service - Coming Soon')}>
                                Terms of Service
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;