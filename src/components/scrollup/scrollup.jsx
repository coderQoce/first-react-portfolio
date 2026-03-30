import React, { useEffect } from "react";
import "./scrollup.css";

const Scrollup = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");

      if (window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="scrollup"
      aria-label="Scroll to top of page"
      type="button"
    >
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </button>
  );
};

export default Scrollup;