import React from "react";
import "./About.css";

function TimelineItem({ heading, subheading, body, source }) {
  return (
    <div className="horizontal-timeline-item">
      <div className="timeline-image">
        <img src={source} alt={subheading} />
      </div>
      <div className="timeline-text">
        <h3>{heading}</h3>
        <h4>{subheading}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
