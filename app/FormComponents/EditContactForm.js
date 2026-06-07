"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function EditContactForm({ url, name, email, phone, onSubmit }) {
  const [imageURL, setImageURL] = useState(url);
  const [contactName, setContactName] = useState(name);
  const [contactEmail, setContactEmail] = useState(email);
  const [contactPhone, setContactPhone] = useState(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactPhone.length !== 11 || contactPhone.includes("-")) {
      alert("Phone number must be 11 digits.  Do not include dashes");
      return;
    }

    onSubmit({
      name: contactName,
      image_url: imageURL,
      email: contactEmail,
      phone: contactPhone,
    });
  };

  return (
    <form className="container-fluid text-center" onSubmit={handleSubmit}>
      <h1>Edit Contact</h1>

      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input
          type="text"
          className="form-control"
          value={imageURL}
          onChange={(event) => setImageURL(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
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
          maxLength={11}
          value={contactPhone}
          onChange={(event) => setContactPhone(event.target.value)}
          required
        />
      </div>

      <div>
        <button type="submit" className="btn btn-primary">
          SUBMIT EDITED INFO
        </button>

        <Link href="/contacts" className="btn btn-outline-danger ms-2">
          Back
        </Link>
      </div>
    </form>
  );
}

EditContactForm.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
};

export default EditContactForm;
