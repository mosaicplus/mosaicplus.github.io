import React, { useState } from "react";
import "./About.css";

function TimelineItem(props) {
  return (
    <div className="timeline-item">
      <div className="timeline-left">
        <div className="timeline-header">{props.heading}</div>
      </div>
      <div className="timeline-center">
        <div className="timeline-circle">
          <svg
            style={{ color: "black" }}
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-hexagon-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"
              fill="black"
            ></path>
          </svg>
        </div>
      </div>
      <div className="timeline-right">
        <h4>{props.subheading}</h4>
        <div className="timeline-image">
          <img src={props.source} width="100%"></img>
        </div>
        <div className="timeline-body">
          <p>{props.body}</p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
