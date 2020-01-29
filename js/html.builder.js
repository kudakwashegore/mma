
/**
 * what we are trying to build
 <div class="contact">
      <span><img src="https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg" /></span>
      <div class="summary">
          <h3>Michael Lawson</h3>
          <em>michael.lawson@reqres.in</em>
      </div>
  </div>
 */

export default class HtmlBuilder{
  static buildListContact(contact) {
    const em = document.createElement("em");
    const h3 = document.createElement("h3");
    const summaryDiv = document.createElement("div");
    const span = document.createElement("span");
    const img = document.createElement("img");
    const contactDiv = document.createElement("div");

    em.innerText = contact.email;
    h3.innerText = `${contact.first_name} ${contact.last_name}`;
    img.src = contact.avatar;

    summaryDiv.appendChild(h3);
    summaryDiv.appendChild(em);
    span.appendChild(img)
    contactDiv.appendChild(span);
    contactDiv.appendChild(summaryDiv)

    summaryDiv.classList.add("summary");
    contactDiv.classList.add("contact");

    return contactDiv;
  }


  /*
  <img id="contact-image" src="https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg">
  <h2 id="contact-name">Janet Weaver</h2>
  <strong id="contact-email">janet.weaver@reqres.in</strong>
  */

  static buildSingleContact(contact) {
    const h2 = document.getElementById("contact-name");
    const strong = document.getElementById("contact-email");
    const img = document.getElementById("contact-image");

    strong.innerText = contact.email;
    h2.innerText = `${contact.first_name} ${contact.last_name}`;
    img.src = contact.avatar;
  }
}
