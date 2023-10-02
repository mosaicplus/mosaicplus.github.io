import React, { useEffect } from 'react';
import { atcb_init } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';

function AddToCalendar (props) {

  useEffect(() => { atcb_init() }, []);

  return (
    <div className="atcb" style={{display:"none"}}>
      {'{'}
        "name": "{props.title}",
        "startDate":"{props.startDate}",
        "endDate":"{props.endDate}",
        "location":"{props.location}",
        "startTime":"{props.startTime}",
        "endTime":"{props.endTime}",
        "label":"Add to GCal",
        "options":[
        "Google"
        ],
        "listStyle":"overlay",
        "size":"5",
        "timeZone":"{props.timezone}"
        
        {'}'}
    </div>
  );
}

export default AddToCalendar