"use client";

import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { useContacts } from "../../../contexts/UserContext";
import EditContactForm from "../../../FormComponents/EditContactForm";

export default function EditContact() {
  const { id } = useParams();
  const router = useRouter();

  const { getContact, editContact, allContacts } = useContacts();
  const contact = getContact(parseInt(id, 10));

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

  const handleSubmitEditedContact = (updatedContact) => {
    const contactIdUpdate = {
      id: contact.id,
      ...updatedContact,
    };

    //Check duplicates and allow updating with original info.
    const duplicateEmail = allContacts.find(
      (contact) =>
        contact.email.toLowerCase() === updatedContact.email.toLowerCase() &&
        contact.id !== contactIdUpdate.id,
    );

    const duplicatePhone = allContacts.find(
      (contact) =>
        contact.phone_number === updatedContact.phone_number &&
        contact.id !== contactIdUpdate.id,
    );

    if (duplicateEmail) {
      alert("A contact with this email already exists");
      return;
    }

    if (duplicatePhone) {
      alert("A contact with this phone number already exists");
      return;
    }

    editContact(contactIdUpdate);

    router.push(`/contacts/${contact.id}`);
  };

  return (
    <div className="container mt-4">
      <EditContactForm
        url={contact.image_url}
        name={contact.name}
        email={contact.email}
        phone={contact.phone_number}
        onSubmit={handleSubmitEditedContact}
      />
    </div>
  );
}
