import React from 'react';
import "./home.css";

const ScrollDown = () => {
  const handleScrollClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#about');
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
    <div className="home_scroll">
      <a href="#about" onClick={handleScrollClick} className="home_scoll-button button-flex">
        {/* <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L6 13M12 19L18 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
        <span className="home_scroll-name">Scroll down</span>
        <i className="uil uil-arrow-down home_scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;