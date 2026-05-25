"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { contactAPI } from "../../data/contactAPI";

export default function SelectedContact() {
  const { id } = useParams();
  const contact = contactAPI.get(parseInt(id, 10));

  return (
    <main>
      <div className="text-center">
        <h1>Contact Info</h1>
        <p>{contact.name}</p>
        <p>
          <img src={contact.image_url} alt={contact.name} />
        </p>
        <p>{contact.email}</p>
        <p>{contact.phone_number}</p>

        <Link href="/contacts">Back</Link>
      </div>
    </main>
  );
}
