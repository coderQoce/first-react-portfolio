import React, { useState, useEffect } from 'react';
import "./header.css";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.pageYOffset;
            const isMobile = window.innerWidth <= 768;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = isMobile ?
                    current.offsetTop - 50 :  // Less offset on mobile since header is at bottom
                    current.offsetTop - 100; // More offset on desktop for header
                const sectionId = current.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    setActiveNav(`#${sectionId}`);
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll); // Also update on resize
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            // Check if we're on mobile (header at bottom)
            const isMobile = window.innerWidth <= 768;
            const header = document.querySelector('.header');
            let headerHeight = 0;

            if (isMobile) {
                // On mobile, header is at bottom, so no offset needed
                headerHeight = 0;
            } else {
                // On desktop, header is at top, so account for its height
                headerHeight = header?.offsetHeight || 0;
            }

            const elementPosition = element.offsetTop - headerHeight - 20;

            // Use instant scroll to prevent jumping
            window.scrollTo(0, elementPosition);
            setActiveNav(targetId);
        }
        showMenu(false);
    };

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav_logo">OnyX</a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className={activeNav === "#home" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-estate nav_icon active-link"></i>Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className={activeNav === "#about" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-user nav_icon"></i>About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-file-alt nav_icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className={activeNav === "#services" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-briefcase-alt nav_icon"></i>Services
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#qualification" onClick={(e) => handleNavClick(e, '#qualification')} className={activeNav === "#qualification" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-briefcase-alt nav_icon"></i>Qualifications
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className={activeNav === "#portfolio" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-scenery nav_icon"></i>Portfolio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-message nav_icon"></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;