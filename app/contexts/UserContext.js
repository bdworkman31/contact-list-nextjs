"use client";

import { createContext, useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";

const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [allContacts, setContacts] = useState([
    {
      id: 70219577,
      name: "Albert Einstein",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "15555555555",
    },
  ]);

  const addContact = ({ url, name, email, phone }) => {
    const newContact = {
      id: Math.round(Math.random() * 100000000),
      name: name,
      image_url: url || "https://wikipedia.org",
      email: email,
      phone_number: phone,
    };
    setContacts((currentContacts) => [...currentContacts, newContact]);
  };

  const editContact = (editedContact) => {
    setContacts((allContacts) =>
      allContacts.map((contact) =>
        contact.id === editedContact.id ? editedContact : contact,
      ),
    );
  };

  const getContact = useCallback(
    (id) => {
      return allContacts.find((contact) => contact.id === Number(id));
    },
    [allContacts],
  );

  const deleteContact = (id) => {
    setContacts((currentList) =>
      currentList.filter((contact) => contact.id !== Number(id)),
    );
  };

  return (
    <ContactContext.Provider
      value={{
        allContacts,
        addContact,
        editContact,
        getContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export function useContacts() {
  return useContext(ContactContext);
}
