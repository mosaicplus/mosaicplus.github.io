import React from "react";
import "./TransitionProgram.css";

function TransitionProgramComponent() {
  return (
    <div id="transition-program">
      {/* Section Header (Original Style) */}
      <div className="section-header purple-header">
        <h1>Transition Program</h1>
      </div>

      {/* Introduction Section */}
      <div className="flex-full-width">
        <div className="tp-column tp-description">
          <p>
            The Mosaic+ Transition Program is a year-long mentorship and peer-support program that welcomes newly admitted students to learn more about computer science, with an emphasis on interracial understanding and community building. The program helps students identify and mitigate issues encountered by minority students at a predominantly white institution and learn about the resources at the University and the CS department. No prior computer science experience is necessary. Students will be exposed to an exciting mix of technical, community-oriented activities and tasks to help prepare them for the rigors of computer science at Brown University.
          </p>
        </div>
        <div className="tp-column tp-photo-cover"></div>
      </div>

      {/* Additional Photo */}
      <div className="flex-full-width additional-photo">
        <div className="tp-photo-cover-second"></div>
      </div>

      {/* Details Section */}
      <div className="flex-full-width different-height">
        <div className="tp-column">
          <h3>What will students learn about during this program?</h3>
          <ul className="enhanced-list">
            <li>
              <div className="list-icon">&#128187;</div> {/* Computer icon */}
              Computer Science as a Field
            </li>
            <li>
              <div className="list-icon">&#127979;</div> {/* University icon */}
              Computer Science at Brown University
            </li>
            <li>
              <div className="list-icon">&#128188;</div> {/* Industry icon */}
              The Computer Science Industry
            </li>
            <li>
              <div className="list-icon">&#128295;</div> {/* Tools icon */}
              Coding Basics
            </li>
            <li>
              <div className="list-icon">&#127891;</div> {/* Graduation icon */}
              What to expect in their first semester as a computer science student!
            </li>
          </ul>
        </div>

        <div className="tp-column">
          <h3>Where and when will this program take place?</h3>
          <p>
            For 2024, the Mosaic+ Transition Program begins online from Monday, July 29 until Friday, August 16, and then continues for four days in person from Tuesday, August 20 until Friday, August 23.
          </p>

          <div>
            <p>Students admitted to the program are eligible to move into their fall residence hall on Monday, August 19.</p>
          </div>
        </div>
      </div>

      {/* Full-Width Application Section */}
      <div className="tp-column tp-full-width-apply">
        <h3>How to Apply:</h3>
        <p>
          The Program Application for 2024 is now closed. Applications for summer 2025 will open in spring or early summer 2025. We hope to see you apply!
        </p>
      </div>
    </div>
  );
}

export default TransitionProgramComponent;
