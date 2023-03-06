import React, { useState } from "react";
import "./TransitionProgram.css";
import tpPhoto from "../../../content/photos/pre-o.jpg";

function TransitionProgramComponent() {
  return (
    <div id="transition-program">
      <div className="section-header purple-header">
        <h1>Transition Program</h1>
      </div>

      <div className="flex-full-width">
        <div className="tp-column">
          <p className="body-text">
            The Mosaic+ Transition Program is a year-long mentorship
            and peer-support program that welcomes newly admitted
            underrepresented minority students to Brown University’s
            Computer Science department. The program begins with an
            online summer course, followed by an activity-packed
            pre-orientation program during the last week of summer,
            just before the first semester of the academic year.
            Students will be exposed to an exciting mix of technical,
            community-oriented activities and tasks to help prepare
            them for the rigors of computer science at Brown
            University.
          </p>
        </div>
        <div className="tp-column tp-photo-cover">
          <div className="tp-photo-container">
            {/* <img src={tpPhoto} className="tp-photo"></img> */}
          </div>
        </div>
      </div>

      <div className="flex-full-width different-height">
        <div className="tp-column">
          <h3>Who should apply?</h3>
          <p>
            This program is geared towards newly admitted, racially
            underrepresented minority students* who have any interest
            in computer science, or want to learn more about the field,
            at any level of experience!
          </p>
          <p className="asterik-text">
            * In computer science, those who identify as Black,
            African-American, American Indian, Alaskan Native,
            Hispanic, Latina/o/x, Native Hawaiian, and/or Pacific
            Islander are considered to be Underrepresented Racial
            and/or Ethnic Minorities (URMs). HOW TO APPLY: Applications
            to this year’s program are closed. Applications for the
            Summer of 2023 will open up later this year.
          </p>
        </div>
        <div className="tp-column">
          <h3>What will students learn during this program?</h3>
          <p>
            Throughout the course of the transition program, students
            will learn about:
          </p>
          <ul>
            <li>
              Computer Science Fundamentals such as Object Oriented
              Programming and Front-end Development Skills
            </li>
            <li>How to master TA hours and Office Hours Potential</li>
            <li>Career Paths within Computer Science</li>
            <li>Connect with Mosaic+ Alumni</li>
          </ul>
        </div>
        <div className="tp-column">
          <h3>How to apply:</h3>
          <p>
            Applications to this year’s program are closed.
            Applications for the Summer of 2023 will open up later this
            year.
          </p>
        </div>
        <div className="tp-column">
          <h3>Where and when will this program take place?</h3>
          <p>
            This program will take place at the end of July and
            throughout the beginning of August. The program will have
            two parts: an online prep course and an in-person
            pre-orientation camp.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TransitionProgramComponent;
