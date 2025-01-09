import React, { useState, useRef } from "react";
import "./Contact.css";

function ContactComponent() {
  const [formStatus, setFormStatus] = useState("Send");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    // Construct the mailto link
    const mailtoLink = `mailto:mosaic-plus@brown.edu?subject=New Message from ${encodeURIComponent(
      data.user_name
    )}&body=${encodeURIComponent(
      `Name: ${data.user_name}\nEmail: ${data.user_email}\n\nMessage:\n${data.message}`
    )}`;

    // Open the mail client
    window.location.href = mailtoLink;

    // Reset form
    form.current.reset();
    setFormStatus("Send");
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
        <p className="contact-header">
          Our lead team can also be reached at mosaic-plus@brown.edu
        </p>
      </div>
    </div>
  );
}

export default ContactComponent;
