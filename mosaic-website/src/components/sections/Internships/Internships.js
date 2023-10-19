import React, { useState } from "react";
import "./Internships.css";


function InternshipComponent() {
  return (
    <div id="internship">
      <div className="section-header yellow-header">
        <h1>Internships</h1>
      </div>

      <div className="internship-section">
        <div className="intern-column">
          <img src={mentorPhoto} className="tp-photo"></img>
        </div>
        <div className="inter-column">
          <p className="body-text">
            Mosaic+ is committed to helping people receive internships :D
          </p>
        </div>
      </div>
      <div className="intern-section">
        <div className="inter-column">
          <h3>Links to Internships !</h3>
          <p>
            Here's a link for a list of internships specificall for first and
            second years
            <li>https://github.com/codicate/underclassmen-internships</li>
            If you're interested in APM internships at Ancetry please email
            Stephanie and mention Mosaic+ at
            <li>stephanie_alvarado@alumni.brown.edu</li>
            or reach out on LinkedIn
            <li>
              https://www.linkedin.com/in/stephanie-alvarado-444000136?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app
            </li>
            For juniors, netflix has interships open, they fill up fast !!
            <li>https://jobs.netflix.com/jobs/298350570</li>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InternshipComponent;
