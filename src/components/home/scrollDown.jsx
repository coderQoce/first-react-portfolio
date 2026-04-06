import React from 'react';
import "./home.css";

const ScrollDown = () => {
  const handleScrollClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const elementPosition = element.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
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