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
            <li>Computer science as a field</li>
            <li>Computer science at Brown University</li>
            <li>The computer science industry</li>
            <li>Coding basics</li>
            <li>
              What to expect in their first semester as a computer
              science student
            </li>
          </ul>
        </div>
        <div className="tp-column">
          <h3>Where and when will this program take place?</h3>
          {/* <p>
            This program will take place at the end of July and
            throughout the beginning of August. The program will have
            two parts: an online prep course and an in-person
            pre-orientation camp.
          </p>   */}
          <p>
            For 2023, this program will run for 3 weeks online from
            Monday July 31 until Friday August 18, and 4-days in-person
            from Tuesday August 22 until Friday August 25. Eligible
            students will participate in online and in-person CS
            lessons and in-person community-building activities,
            workshops and first-year info-sessions. Students admitted
            to the program are eligible to move into their fall dorm
            room early on Monday August 21.
          </p>
        </div>

        <div className="tp-column">
          <h3>How to apply:</h3>
          <p>
            The Program Application is now open. Applications are due
            by July 11, 2023. Application URL:{" "}
            <span>
              <a href="https://brown.co1.qualtrics.com/jfe/form/SV_1GMS0qSBk9VbPoi">
                https://brown.co1.qualtrics.com/jfe/form/SV_1GMS0qSBk9VbPoi
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TransitionProgramComponent;
