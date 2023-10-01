import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Feel Free To Contact Us</h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.466850762704!2d77.49942917463572!3d28.675678282121616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAKGEC%3A%20Ajay%20Kumar%20Garg%20Engineering%20College%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1684519980833!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contact_me">
        <form action="https://formspree.io/f/xzbqonqk" method='POST' className='contact-inputs'>
          <input
          type="text"
          placeholder="USERNAME"
          name="username"
          required autoComplete="off"
          />

          <input
          type="email"
          placeholder="EMAIL"
          name="Email"
          required autoComplete="off"
          />

          <textarea
          name="Meassage"
          cols='30'
          rows="10"
          placeholder="ENTER YOUR MEASSAGE"
          />

          <input type="SUBMIT" value='SEND' className="sub"/>
        </form>

</div>
    </div>
  );
};

export default Contact;
