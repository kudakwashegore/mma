export default class ContactFetcher {
  constructor(baseUrl){
    this.baseUrl = baseUrl;
  }

  getContacts() {
    return fetch(`${this.baseUrl}users?page=2`);
  }

  getContact(contactId) {
    return fetch(`${this.baseUrl}users/${contactId}`);
  }
}
