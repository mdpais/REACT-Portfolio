import React from 'react';
import ContactForm from '../ContactForm';

export default function Contact() {
  const submitMessage = (item) => {
    console.log("Submit button clicked");
  };
  return (
    <div className='main'>
      <h2>Send me a message</h2>
      <p>
        ...and I'll get back to you.
      </p>
      <ContactForm onSubmit={submitMessage} />
    </div>
  );
}
