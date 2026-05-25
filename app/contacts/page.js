"use client";
import Link from "next/link";
import { useState } from "react";
import { contactAPI } from "../data/contactAPI";

export default function ContactsPage() {
  const [allContacts] = useState(contactAPI.all());

  return (
    <main className="container mt-4">
      <h2 className="text-center mb-4">All Contacts</h2>

      <div className="text-center mb-4">
        <Link href="/contacts/new" className="btn btn-primary">
          ADD CONTACT
        </Link>
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
          {allContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.image_url} alt={contact.name} />
              </td>

              <td>
                <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
              </td>

              <td>{contact.email}</td>

              <td>{contact.phone_number}</td>

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
