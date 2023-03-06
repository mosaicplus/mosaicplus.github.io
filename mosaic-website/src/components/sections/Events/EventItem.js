import React, { useEffect } from "react";
import moment from "moment";
import "./Events.css";
import { atcb_action, atcb_init } from "add-to-calendar-button";
import AddToCalendar from "./AddToCalendar";

function EventItemComponent(props) {
  const startString = new Date(
    new Date(props.event.start.dateTime).toUTCString()
  ).toISOString();
  const endString = new Date(
    new Date(props.event.end.dateTime).toUTCString()
  ).toISOString();

  return (
    <div className="event_item">
      <h3>{props.event.summary}</h3>
      <time className="event_date">
        <span className="cal_icon">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 27.875 27.875"
            className="icon_cal"
          >
            <path d="M25.97,2.893h-5.441V1.5c0-0.829-0.672-1.5-1.5-1.5c-0.827,0-1.5,0.671-1.5,1.5v1.393h-7.182V1.5c0-0.829-0.672-1.5-1.5-1.5c-0.828,0-1.5,0.671-1.5,1.5v1.393H1.904c-0.828,0-1.5,0.671-1.5,1.5v21.982c0,0.83,0.672,1.5,1.5,1.5h24.066c0.828,0,1.5-0.67,1.5-1.5V4.393C27.47,3.564,26.797,2.893,25.97,2.893z M3.403,24.876V9.619H24.47v15.256L3.403,24.876L3.403,24.876z" />
          </svg>
          <p></p>
        </span>
        {moment(props.event.start.dateTime).format("dddd")},{" "}
        {moment(props.event.start.dateTime).format("MMMM Do")}
      </time>

      <time className="event_date">
        <span className="clock_icon">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="icon_clock"
          >
            <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M21.7,11.7l-5,5C16.5,16.9,16.3,17,16,17c-0.1,0-0.3,0-0.4-0.1C15.2,16.8,15,16.4,15,16V7c0-0.6,0.4-1,1-1s1,0.4,1,1v6.6l3.3-3.3c0.4-0.4,1-0.4,1.4,0S22.1,11.3,21.7,11.7z" />
          </svg>
          <p></p>
        </span>
        {moment(props.event.start.dateTime).format("h:mm a")} -{" "}
        {moment(props.event.end.dateTime).format("h:mm a")}
      </time>
      <div className="event_date">
        <span className="clock_icon">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 425.963 425.963"
            className="icon_clock"
          >
            <path
              d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081
		c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002
		c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482
		C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884
		c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"
            />
          </svg>
          <p></p>
        </span>
        {props.event.location}
      </div>
      <span className="badge">
        <div
          dangerouslySetInnerHTML={{
            __html: props.event.description,
          }}
        />
      </span>

      <AddToCalendar
        title={props.event.summary}
        startDate={startString.substring(0, 10)}
        endDate={endString.substring(0, 10)}
        startTime={startString.substring(11, 19)}
        endTime={endString.substring(11, 19)}
        location={props.event.location}
        timezone={props.event.start.timezone}
      />
    </div>
  );
}

export default EventItemComponent;
