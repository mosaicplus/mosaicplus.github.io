import React from "react";
import Slider from "react-slick";
import "./Mentorship.css";
import mentorPhoto1 from "../../../content/photos/mentor.jpg";
import mentorPhoto2 from "../../../content/photos/timeline7.jpg";
import mentorPhoto3 from "../../../content/photos/mentor2.jpg";
import mentorPhoto4 from "../../../content/photos/mentor3.jpg";
import mentorPhoto5 from "../../../content/photos/mentor4.jpg";
import mentorPhoto6 from "../../../content/photos/mentor5.jpg";

function MentorshipComponent() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div>
      <div className="section-header blue-header">
        <h1>Mentorship</h1>
      </div>

      <div id="mentorship">
        <div className="mentorship-content">
          <div className="mentorship-intro">
            <Slider {...sliderSettings} className="mentor-photo-slider">
              <div>
                <img src={mentorPhoto2} alt="Mentor 1" className="mentor-photo" />
              </div>
              <div>
                <img src={mentorPhoto3} alt="Mentor 3" className="mentor-photo" />
              </div>
              <div>
                <img src={mentorPhoto4} alt="Mentor 3" className="mentor-photo" />
              </div>
              <div>
                <img src={mentorPhoto5} alt="Mentor 3" className="mentor-photo" />
              </div>
              <div>
                <img src={mentorPhoto6} alt="Mentor 3" className="mentor-photo" />
              </div>
            </Slider>
            <p className="mentor-description">
              The Mosaic+ Mentorship Program fosters a strong sense of community for underrepresented students through structured peer support. By offering interactive workshops, mentor-mentee relationships, and collaborative study programs, Mosaic+ ensures that students have access to the resources, guidance, and networks they need to thrive academically and personally within Brown’s Computer Science department.
            </p>
          </div>

          <div className="mentorship-details">
            <div className="mentorship-card">
              <h3>Whiteboard Wednesdays</h3>
              <p>
                Whiteboard Wednesdays are weekly sessions held every Wednesday by Mosaic+ members, designed to help participants build the problem-solving skills essential for success in Computer Science. These sessions cover a wide range of topics throughout the academic year, aimed at developing the intuition needed for challenges such as Data Structure and Algorithm interview questions.
              </p>
            </div>
            <div className="mentorship-card">
              <h3>Mentor Meetings</h3>
              <p>
                Mentor Meetings are one-on-one sessions with a dedicated Mosaic+ mentor, paired with you to provide guidance and support throughout your journey at Brown University. These meetings are designed to help you navigate academic, personal, and professional challenges, with your mentor offering tailored advice and resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorshipComponent;
