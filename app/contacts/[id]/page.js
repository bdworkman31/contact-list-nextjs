"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useContacts } from "../../contexts/UserContext";

export default function SelectedContact() {
  const { id } = useParams();
  const { getContact } = useContacts();

  const contact = getContact(id);

  if (!contact) {
    return (
      <main className="container mt-4 text-center">
        <h3>Contact Profile Not Found</h3>

        <Link href="/contacts" className="btn btn-outline-primary mt-2">
          Back to List
        </Link>
      </main>
    );
  }

  return (
    <main className="container mt-4">
      <div className="text-center">
        <h1>Contact Info</h1>

        <img
          src={contact.image_url}
          alt={contact.name}
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />

        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone_number}</p>

        <Link href="/contacts" className="btn btn-outline-primary me-2">
          Back
        </Link>

        <Link href={`/contacts/${contact.id}`} className="btn btn-warning">
          Edit Contact
        </Link>

        
      </div>
    </main>
  );
}
