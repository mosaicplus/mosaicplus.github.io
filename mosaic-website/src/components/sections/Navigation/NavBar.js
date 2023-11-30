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
  const [borderSize, setBorderSize] = useState("0px");

  // const handleScroll = debounce(() => {
  //   const currentScrollPos = window.pageYOffset;

  //   setVisible(
  //     (prevScrollPos > currentScrollPos &&
  //       prevScrollPos - currentScrollPos > 30) ||
  //       currentScrollPos < 1100
  //   );

  //   setPrevScrollPos(currentScrollPos);
  // }, 100);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 800) {
      setTextColor("white");
      setBgColor("transparent");
      setBorderSize("0px");
      return;
    } else if (window.scrollY > 800) {
      setTextColor("black");
      setBgColor("white");
      setBorderSize("1px");
      return;
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () =>
      window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div
        className="navbar"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          top: visible ? "0" : "-120px",
          borderBottom: `${borderSize} solid #e4e4e4`,
        }}
      >
        <div id="navbar" className="navbar-fixed">
          <Link
            to="landing"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="logo-link"
          >
            <div className="logo">
              <img src={MosaicLogo} id="mosaic-logo"></img>
            </div>
          </Link>

          {/* <button
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {isNavExpanded ? (
              <MdClose
                style={{
                  color: textColor,
                  width: "40px",
                  height: "40px",
                }}
              />
            ) : (
              <FiMenu
                style={{
                  color: textColor,
                  width: "40px",
                  height: "40px",
                }}
              />
            )}
          </button> */}

          <div className="mobile-menu">
          <Hamburger toggled={isNavExpanded} toggle={setIsNavExpanded} />
          </div>
          <nav
            className={
              isNavExpanded ? "nav-items expanded" : "nav-items"
            }
            style={{
              backgroundColor: bgColor,
              top: isNavExpanded? "0" : "-100%",
              transitionDelay: isNavExpanded? "0s" : "0s",
            }}
            
          >
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link
                  to="events"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  Events
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  About
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  Team
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link
                  to="transition-program"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  Transition Program
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link
                  to="mentorship"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  Mentorship
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
