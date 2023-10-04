import React, { useState } from 'react';
import '../Contact.css';

const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Här kan du skicka formuläret till din backend eller utföra önskad hantering av formulärdata
    console.log('Skicka formulärdata:', formData);
    // Återställ formuläret
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

 

  return (
    <section>
      <h3 id="contact-us-label">Kontakta oss</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-post</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Skicka</button>
      </form>
    </section>
  );
};

export default Contact;
