import React from "react";

function EventsComponent() {
  return (
    <div className="events">
      <div className="section-header blue-header">
        <h1 className="text-2xl font-bold mb-6">Upcoming Events</h1>
      </div>
      <div className="events-calendar">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_5f871adfdae133ed3ca672d94659c62b577576c001263d216ad5df0af7fbdc1d%40group.calendar.google.com&ctz=America%2FNew_York"
          style={{ border: "1px solid #ccc", width: "100%", height: "600px" }}
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
      </div>
    </div>
  );
}

export default EventsComponent;
