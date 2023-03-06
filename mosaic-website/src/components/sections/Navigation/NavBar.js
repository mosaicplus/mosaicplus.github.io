import "./Nav.css";
import React, { useState, useEffect } from "react";
import MosaicLogo from "./../../../content/graphics/mosaicLogo.png";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";

import Hamburger from "hamburger-react";

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [textColor, setTextColor] = useState("white");
  const [bgColor, setBgColor] = useState("transparent");

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 30) ||
        currentScrollPos < 1100
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 800) {
      return setTextColor("white");
    } else if (window.scrollY > 800) {
      return setTextColor("black");
    }
  };

  const listenScrollEvent2 = (event) => {
    if (window.scrollY < 800) {
      return setBgColor("transparent");
    } else if (window.scrollY > 800) {
      return setBgColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () =>
      window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent2);

    return () =>
      window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-fixed">
        <div className="logo">
          <img src={MosaicLogo} id="mosaic-logo"></img>
        </div>
      </div>
      <nav
        id="navbar"
        className="navbar-fixed navbar-text"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          top: visible ? "0" : "-120px",
          left: "35%",
        }}
      >
        <button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {isNavExpanded ? (
            <MdClose
              style={{ color: "#fff", width: "40px", height: "40px" }}
            />
          ) : (
            <FiMenu
              style={{
                color: "#7b7b7b",
                width: "40px",
                height: "40px",
              }}
            />
          )}
        </button>
        <div
          className={
            isNavExpanded ? "nav-items expanded" : "nav-items"
          }
        >
          <ul>
            <li>
              <Link
                to="events"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="team"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="transition-program"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Transition Program
              </Link>
            </li>
            <li>
              <Link
                to="mentorship"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Mentorship
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
