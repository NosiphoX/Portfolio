// components/sections/Contact.jsx

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Placeholder — swap for a real Email API call later
    console.log("Contact form submitted:", formData);
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="section">
      <span className="section-tag">Get in touch</span>
      <h2 className="section-title">Let's Work Together</h2>
      <p className="section-description">
        Have a project in mind, or just want to say hi? My inbox is always open.
      </p>

      <form className="contact-form glass-panel" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;