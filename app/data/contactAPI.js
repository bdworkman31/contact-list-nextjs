export const contactAPI = {
  contacts: [
    {
      id: 70219577,
      name: "Albert Einstein",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "15555555555",
    },
  ],

  all: function () {
    return this.contacts;
  },
  addContact: function ({ url, name, email, phone }) {
    const newContact = {
      id: Math.floor(Math.random() * 100000000),
      name: name,
      image_url:
        url ||
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: email,
      phone_number: phone,
    };
    this.contacts.push(newContact);
  },
};
