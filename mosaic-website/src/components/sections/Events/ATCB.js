import React, { useEffect } from 'react';
import { atcb_init, atcb_action } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';
import { gapi } from "gapi-script";

function AddToCalendar(props) {

    const handleClick = () => {
        var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
        var SCOPES = "https://www.googleapis.com/auth/calendar.events"

        gapi.load('client:auth2', () => {
          console.log('loaded client')
    
          gapi.client.init({
            apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
            clientId: process.env.REACT_APP_CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          })
    
          gapi.client.load('calendar', 'v3', () => console.log('bam!'))
    
          gapi.auth2.getAuthInstance().signIn()
          .then(() => {
            
            var event = {
              'summary': 'Awesome Event!',
              'location': '800 Howard St., San Francisco, CA 94103',
              'description': 'Really great refreshments',
              'start': {
                'dateTime': '2023-06-28T09:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
              },
              'end': {
                'dateTime': '2023-06-28T17:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
              }
            }
    
            var request = gapi.client.calendar.events.insert({
              'calendarId': 'primary',
              'resource': event,
            })
    
            request.execute(event => {
              console.log(event)
              window.open(event.htmlLink)
            })
          })
        })
      }
     
    return (

        <button style={{width: 100, height: 50}} onClick={handleClick}>Add Event</button>
    );
}

export default AddToCalendar;