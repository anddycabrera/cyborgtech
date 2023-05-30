import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async () => {
    // Make a POST request to your backend to store the contact info
    // For now, let's just mock this
    await axios.post('https://your-backend-url', { name, email, message });
    alert('Form submitted');
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default ContactForm;
