import React, { useState } from "react";
import "./Mentorship.css";

import mentorPhoto from "../../../content/photos/mentor.jpg";

function MentorshipComponent() {
  return (
    <div id="mentorship">
      <div className="section-header blue-header">
        <h1>Mentorship</h1>
      </div>

      <div className="mentorship-section">
        <div className="mentor-column">
          <img src={mentorPhoto} className="tp-photo"></img>
        </div>
        <div className="mentor-column">
          <p className="body-text">
            The Mosaic+ Mentorship program fosters community for
            underrepresented minority students through structured peer
            support. Through interactive workshops, mentor-mentee
            relationships, and group study programs, Mosaic+ ensures
            minority student s are provided the resources and networks
            necessary to make the most of their academic experience
            within Brown’s computer science department.
          </p>
        </div>
      </div>
      <div className="mentorship-section">
        <div className="mentor-column">
          <h3>Workshops</h3>
          <p>
            Workshops are bi-weekly meetings held by Mosaic+ E-Board
            members designed to help members to build the
            problem-solving skills necessary to succeed in Computer
            Science. Throughout the academic year, these topics will
            cover a broad range of topics needed to build the intuition
            for endeavors such as Data Structure and Algorithm
            interview questions used to obtain tech internships.
          </p>
        </div>

        <div className="mentor-column">
          <h3>Group Study</h3>
          <p>
            Group Studies are course-specific, bi-monthly meetings held
            by Mosaic+ facilitators to help Mosaic’s members understand
            course-related concepts. Each group study focuses on a new
            topic within its respective course and has the following
            design: a mini-lecture on the concept, a space for the
            group members to collaboratively solve a problem using the
            given concept, and a space for individuals to solve another
            problem using the given concept. Group Studies always use
            original materials, both to hold collaboration policies and
            to make the problems more exciting!
          </p>
        </div>
      </div>
    </div>
  );
}

export default MentorshipComponent;
