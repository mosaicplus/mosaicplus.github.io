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
            students to learn more about computer science,
            with an emphasis on interracial understanding and community building.
            The program helps students identify and mitigate issues enountered by 
            minority students at a predominantly white institutions, and learn 
            about the resources at the University and the CS department. No prior 
            computer science experience is necessary. 
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
          <h3>What will students learn during this program?</h3>
          <p>
            Throughout the course of the transition program, students
            will learn about:
          </p>
          <ul>
            <li>
              Computer science as a field
            </li>
            <li>Computer science at Brown University</li>
            <li>The computer science industry</li>
            <li>Coding basics</li>
            <li>What to expect in their first 
             semester as a computer science student
            </li>
          </ul>
        </div>

        <div className="tp-column">
          <h3>Where and when will this program take place?</h3>
          <p>
            For 2023, this program will run for 3-weeks online from Monday July 31 
            until Friday August 18, and 4-days in-person from Tuesday August 22 until 
            Friday August 25. Eligible students will participate in online and in-person 
            CS lessons and in-person community-building activities, workshops and first-year
            info-sessions. Students admitted to the program are eligible to move into their 
            fall dorm room early on Monday August 21.
          </p>
        </div>

        <div className="tp-column">
          <h3>How to apply:</h3>
          <p>
          The Program Application for 2023 is now closed. Applications for summer 2024 
          will open spring or early summer 2024.
          We hope to see you apply!
          </p>
        </div>
      </div>
    </div>
  );
}

export default TransitionProgramComponent;
