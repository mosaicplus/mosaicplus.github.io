import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function ContactComponent() {
  const [formStatus, setFormStatus] = React.useState("Send");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setFormStatus("Success");
          e.target.reset();
          setTimeout(function () {
            //your code to be executed after 1 second
            setFormStatus("Send");
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact">
      <div className="section-header red-header">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-component">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            placeholder="Name"
            className="form-control"
            type="text"
            id="name"
            name="user_name"
            required
          />
          <input
            placeholder="Email"
            className="form-control"
            type="email"
            id="email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Message"
            className="form-control message"
            id="message"
            name="message"
            required
          />
          <button className="submit-button" type="submit">
            {formStatus}
          </button>
        </form>
      </div>

      <div>
        <p >Our lead team can also be reached at mosaic.plus.brown@gmail.com.</p>
      </div>
    </div>
  );
}

export default ContactComponent;