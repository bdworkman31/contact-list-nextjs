"use client";

import { contactAPI } from "../../data/contactAPI";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddContact() {
  const [url, setURL] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleSubmitNewContact = (event) => {
    event.preventDefault();

    contactAPI.addContact({
      url,
      name,
      email,
      phone,
    });

    router.push("/contacts");
  };

  return (
    <div className="container mt-4">
      <h1>Add a New Contact</h1>

      <form onSubmit={handleSubmitNewContact}>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            value={url}
            onChange={(event) => setURL(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
