import ContactFetcher from './contact.fetcher.js'
import HtmlBuilder from './html.builder.js'

(function(){
  const baseUrl = 'https://reqres.in/api/';
  let loader = null;
  let contactListSection = null;
  let singleContactSection = null;
  
  function loadContacts(){
    const contatsContainer =  document.getElementById('contacts-container');

    contactListSection = document.getElementById('contacts');
    singleContactSection = document.getElementById('contact');
    loader = document.getElementById('loader');

    loader.classList.remove("hidden");
    singleContactSection.classList.add("hidden");
    //clear the container
    contatsContainer.innerHTML = '';

    (new ContactFetcher(baseUrl))
    .getContacts()
    .then(data=>data.json()
    .then(json=>{
      loader.classList.add("hidden");
      contactListSection.classList.remove("hidden");
      json.data.map(contact=>{
        const contactElement = HtmlBuilder.buildListContact(contact);
        contactElement.addEventListener("click", () => loadContact(contact.id));
        contatsContainer.appendChild(contactElement);
      })
    }))
  }

  function loadContact(id) {
    contactListSection.classList.add("hidden");

    loader.classList.remove("hidden");
    (new ContactFetcher(baseUrl))
    .getContact(id)
    .then(data=>data.json()
    .then(json=>{
      loader.classList.add("hidden");
      singleContactSection.classList.remove("hidden");
      HtmlBuilder.buildSingleContact(json.data);
    }))
  }

  //events that causes contacts to load
  const contactLink =  document.getElementById('contacts-link');
  document.addEventListener("DOMContentLoaded", loadContacts);
  contactLink.addEventListener("click", loadContacts);
})();
