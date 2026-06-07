"use client";

import { useContacts } from "../../contexts/UserContext";
import { useRouter } from "next/navigation";
import ContactForm from "../../FormComponents/ContactForm";

function AddContact() {
  const router = useRouter();

  const { addContact, allContacts } = useContacts();

  const handleSubmitNewContact = (newContact) => {
    //Check for Duplicate Contacts
    const duplicateEmail = allContacts.find(
      (contact) =>
        contact.email.toLowerCase() === newContact.email.toLowerCase(),
    );

    const duplicatePhone = allContacts.find(
      (contact) => contact.phone_number === newContact.phone_number,
    );

    if (duplicateEmail) {
      alert("A contact with this email already exists");
      return;
    }

    if (duplicatePhone) {
      alert("A contact with this phone number already exists");
      return;
    }

    addContact(newContact);

    router.push("/contacts");
  };
  return (
    <div className="container mt-4">
      <ContactForm
        url=""
        name=""
        email=""
        phone=""
        onSubmit={handleSubmitNewContact}
      />
    </div>
  );
}

export default AddContact;
