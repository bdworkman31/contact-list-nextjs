"use client";

import { useContacts } from "../../contexts/UserContext";
import { useRouter } from "next/navigation";
import ContactForm from "../../components/ContactForm";

function AddContact() {
  const router = useRouter();

  const { addContact } = useContacts();

  const handleSubmitNewContact = (newContact) => {
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
