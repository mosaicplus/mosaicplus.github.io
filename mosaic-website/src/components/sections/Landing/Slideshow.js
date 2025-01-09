import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import bgImage from "../../../content/photos/timeline5.jpg";
import bgImage2 from "../../../content/photos/timeline6.jpg";
import bgImage3 from "../../../content/photos/timeline7.jpg";
import bgImage4 from "../../../content/photos/timeline.jpg";
import bgImage5 from "../../../content/photos/timeline9.jpg";
import bgImage6 from "../../../content/photos/timeline10.jpg";
import bgImage7 from "../../../content/photos/timeline11.jpg";
import bgImage8 from "../../../content/photos/timeline8.JPG";

import "./Landing.css";

const slideImages = [bgImage5, bgImage6, bgImage7, bgImage, bgImage8, bgImage2, bgImage3, bgImage4];

const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: false,
  pauseOnHover: false,
  easing: "ease",
  onChange: (oldIndex, newIndex) => { },
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
                style={{ backgroundImage: `url(${slideImages[0]})`, backgroundPosition: "center" }}
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
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${slideImages[3]})` }}
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${slideImages[4]})` }}
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${slideImages[5]})` }}
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${slideImages[6]})`, backgroundPosition: "center" }}
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${slideImages[7]})`, backgroundPosition: "center" }}
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
              created to foster{" "}
              <span className="yellow-highlight">community</span>,
              inspire <span className="red-highlight">innovation</span>
              , and provide{" "}
              <span className="purple-highlight">opportunity</span> and
              equity to underrepresented minority students in computer
              science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SlideShow;
