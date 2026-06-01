"use client";

import Link from "next/link";
import { useContacts } from "../contexts/UserContext";
import { useState } from "react";

export default function ContactsPage() {
  const { allContacts, deleteContact } = useContacts();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?",
    );

    if (confirmDelete) {
      deleteContact(id);
    }
  };

  return (
    <main className="container mt-4">
      <h2 className="text-center mb-4">All Contacts</h2>

      <div className="text-center mb-4">
        <Link href="/contacts/new" className="btn btn-primary">
          ADD CONTACT
        </Link>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Contacts"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          required
        />
      </div>

      <table className="table table-striped align-middle">
        <thead>
          <tr>
            <th>Profile Pic</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {filteredContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.image_url}
                  alt={contact.name}
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
              </td>

              <td>
                <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
              </td>

              <td>{contact.email}</td>

              <td>{contact.phone_number}</td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </td>

              <td>
                <Link href={`/contacts/${contact.id}/edit`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
