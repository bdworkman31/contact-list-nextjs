"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { useContacts } from "../../../contexts/UserContext";

export default function EditContact() {
  const { id } = useParams();
  const router = useRouter();

  const { getContact, editContact } = useContacts();
  const contact = getContact(id);

  const [url, setURL] = useState(contact?.image_url || "");
  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [phone, setPhone] = useState(contact?.phone_number || "");

  if (!contact) {
    return (
      <main className="container mt-4 text-center">
        <h3>Contact Not Found</h3>
        <Link href="/contacts" className="btn btn-outline-primary">
          Back to Contacts
        </Link>
      </main>
    );
  }

  const handleSubmitEditedContact = (e) => {
    e.preventDefault();

    editContact({
      id: contact.id,
      name,
      image_url: url,
      email,
      phone_number: phone,
    });

    router.push(`/contacts/${contact.id}`);
  };

  return (
    <div className="container mt-4">
      <form
        className="container-fluid text-center"
        onSubmit={handleSubmitEditedContact}
      >
        <h1>Edit Contact</h1>

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

        <div>
          <button type="submit" className="btn btn-primary">
            SUBMIT EDITED INFO
          </button>

          <Link href="/contacts" className="btn btn-outline-danger ms-2">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
