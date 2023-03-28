import React, { useState } from 'react';

function ContactForm(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      // code to go here
    });

    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" name="name" class="form-control" value={input} onChange={handleChange} placeholder="Your name here"></input>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" name="email" class="form-control"  value={input} onChange={handleChange} placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea name="email" class="form-control"  value={input} onChange={handleChange} rows="3"></textarea>
      </div>
        <button className="bucket-button">Submit</button>
    </form>
  )
}

export default ContactForm;
