"use client";
import { useState } from "react";
import { contactAPI } from "../data/contactAPI";
import Link from "next/link";

export default function ShowContacts() {
  const [allContacts, _] = useState(contactAPI.all());

  return (
    <main>
      <div>
        <h1>Welcome to the Contacts Page</h1>
        {allContacts.map((p) => (
          <li key={p.number}>
            <Link href={`/contacts/${p.number}`}>{p.name}</Link>
          </li>
        ))}
      </div>
    </main>
  );
}
