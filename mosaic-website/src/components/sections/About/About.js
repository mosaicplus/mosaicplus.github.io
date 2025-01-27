import React from "react";
import "./About.css";
import TimelineItem from "./TimelineItem";
import timeline1 from "../../../content/photos/timeline1.jpg";
import timeline2 from "../../../content/photos/timeline2.jpg";
import timeline3 from "../../../content/photos/timeline3.jpg";
import timeline4 from "../../../content/photos/timeline4.jpg";

const timelineItems = [
  {
    heading: "Spring 2015",
    subheading: "Our Humble Beginnings",
    body: `In the spring of 2015, Prof. Chad Jenkins brought thirteen
    students together to talk about underrepresentation of racial minorities
    in Computer Science. With his advising and the leadership of the first
    Co-Coordinators of Mosaic+: Nifemi Madarikan '17 and Chelse-Amoy Steele '18, 
    Mosaic+ was born!`,
    source: timeline1,
  },
  {
    heading: "Fall 2015",
    subheading: "Mosaic+ is Born",
    body: `Over the summer, the cohort was hard at work, planning programs 
    and initiatives they believed would have a real impact in Brown CS. After 
    pitching the ideas and the student group to the department chair, Ugur 
    Cetintemel, it was official: Mosaic+ established its place in Brown CS.`,
    source: timeline2,
  },
  {
    heading: "Spring 2016",
    subheading: "Mentorship Program Launch",
    body: `The coordinators and the mentorship program worked together to 
    select a team of dedicated and compassionate student leaders to become 
    Mosaic+ mentors. They worked hand-in-hand with their mentees to guide 
    them through their semester and to set a strong precedent to follow!`,
    source: timeline3,
  },
  {
    heading: "Summer 2016",
    subheading: "Our First Transition Program",
    body: `Just over a year after the Mosaic+ team came to be, we held our 
    very first transition program, welcoming the first cohort of 
    students into Brown CS and into the Mosaic+ family!`,
    source: timeline4,
  },
];

function AboutComponent() {
  return (
    <div className="about" id="about">
      <div className="section-intro">
        <div className="section-header yellow-header">
          <h1>About Us</h1>
        </div>
        <div className="about-section">
          <p className="about-text">
            Mosaic+ is a student-run organization advocating for diversity in computer science.
            We strive to create an academic environment receptive to underrepresented students and faculty at Brown University.
          </p>
        </div>
      </div>

      <div className="timeline-section">
        <div className="horizontal-timeline">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              heading={item.heading}
              subheading={item.subheading}
              body={item.body}
              source={item.source}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
