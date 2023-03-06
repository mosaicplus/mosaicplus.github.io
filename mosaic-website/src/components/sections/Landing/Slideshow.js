import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import bgImage from "../../../content/photos/timeline3.jpg";
import bgImage2 from "../../../content/photos/timeline4.jpg";
import bgImage3 from "../../../content/photos/timeline2.jpg";
import "./Landing.css";

const slideImages = [bgImage, bgImage2, bgImage3];

const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: false,
  pauseOnHover: false,
  easing: "ease",
  onChange: (oldIndex, newIndex) => {},
};

const SlideShow = () => {
  return (
    <div className="slideshow">
      {/* <div className="test">SlideShow</div> */}
      <div className="slide-container">
        <div className="real-slide">
          <Slide {...properties}>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${slideImages[0]})` }}
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${slideImages[1]})` }}
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${slideImages[2]})` }}
              ></div>
            </div>
          </Slide>
        </div>

        <div className="hero-text">
          <div className="hero-heading">
            <h1>Mosaic+ <span>&#64;</span> Brown University </h1>
          </div>
          <div className="hero-subheading">
            <p>
              Created to foster{" "}
              <span className="yellow-highlight">community</span>,
              inspire <span className="red-highlight">innovation</span>
              , and provide{" "}
              <span className="purple-highlight">opportunity</span> to
              underrepresented racial minority students in computer
              science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
