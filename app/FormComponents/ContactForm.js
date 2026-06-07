"use client";

import { useState } from "react";
import PropTypes from "prop-types";

function ContactForm({ url, name, email, phone, onSubmit }) {
  const [imageURL, setImageURL] = useState(url);
  const [contactName, setContactName] = useState(name);
  const [contactEmail, setContactEmail] = useState(email);
  const [contactPhone, setContactPhone] = useState(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactPhone.length !== 11 || contactPhone.includes("-")) {
      alert("Phone number must be 10 digits.  Do not include dashes");
      return;
    }

    onSubmit({
      image_url: imageURL,
      name: contactName,
      email: contactEmail,
      phone_number: contactPhone,
    });
  };

  return (
    <form className="container-fluid text-center" onSubmit={handleSubmit}>
      <h1>Add a New Contact</h1>

      <div className="mb-3">
        <label className="form-label">Image URL</label>

        <input
          type="text"
          className="form-control"
          placeholder="Enter Image URL"
          value={imageURL}
          onChange={(event) => setImageURL(event.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name</label>

        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          value={contactName}
          onChange={(event) => setContactName(event.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>

        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          value={contactEmail}
          onChange={(event) => setContactEmail(event.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>

        <input
          type="text"
          className="form-control"
          placeholder="Enter Phone Number for Contact"
          maxLength={11}
          value={contactPhone}
          onChange={(event) => setContactPhone(event.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        ADD NEW CONTACT
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
};

export default ContactForm;
