import React from 'react';
import ContactForm from '../ContactForm';

export default function Contact() {
  const submitMessage = (item) => {
    console.log("Submit button clicked");
  };
  return (
    <div className='main'>
      <h2>Want to know more?</h2>
      <br></br>
      <ContactForm onSubmit={submitMessage} />
    </div>
  );
}
