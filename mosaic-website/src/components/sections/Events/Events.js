import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import EventItemComponent from "./EventItem";
import moment from "moment";

function EventsComponent() {
  const [events, setEvents] = useState([]);

  const getEvents = (calendarID, apiKey) => {
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
        .then(
          (response) => {
            let events = response.result.items.filter(
              (event) => new Date(event.end.dateTime) > new Date()
            );
            console.log(events);
            // console.log(new Date(new Date(events[0].start.dateTime).toUTCString()).toISOString())
            setEvents(events);
          },
          function (err) {
            return [false, err];
          }
        );
    }
    gapi.load("client", initiate);
  };

  useEffect(() => {
    const cal_events = getEvents(
      process.env.REACT_APP_CALENDAR_ID,
      process.env.REACT_APP_GOOGLE_API_KEY
    );

    setEvents(cal_events);
  }, []);

  return (
    
    <div className="events">
      <div className="section-header blue-header">
        <h1> Upcoming Events</h1>
      </div>

      <div>
        {events?.map((event) => (
          <div key={event.id} className="event flex justify-center">
            <EventItemComponent event={event}></EventItemComponent>
          </div>
        ))}

        {events?.length == 0 &&
          <p className="no-events">
            Come back for future events!
          </p>
        }
      </div>
    </div>
  );
}

export default EventsComponent;
