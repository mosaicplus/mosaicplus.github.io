import React, { useState } from "react";
import "./Internships.css";


function InternshipComponent() {
  return (
    <div id="internship">
      <div className="section-header yellow-header">
        <h1>Internships</h1>
      </div>

      <div className="internship-section">
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
            <li>
              {/* <a href=https://github.com/codicate/underclassmen-internships>
              wompwomp
              </a> */}
              <a href="https://github.com/codicate/underclassmen-internships">
                list of internships
              </a>
            </li>
            If you're interested in APM internships at Ancetry please email
            Stephanie and mention Mosaic+ at
            <li>stephanie_alvarado@alumni.brown.edu</li>
            or reach out on LinkedIn
            <li>
              <a href=" https://www.linkedin.com/in/stephanie-alvarado-444000136?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_apps">
                Stephanie's Linkedin
              </a>
            </li>
            For juniors, netflix has interships open, they fill up fast !!
            <li>
              <a href="https://jobs.netflix.com/jobs/298350570">netflix jobs</a>
            </li>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InternshipComponent;
