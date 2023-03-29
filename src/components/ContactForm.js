import React, { useState } from 'react';

function ContactForm(props) {
  const [inputs, setInputs] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      // code goes here
    });

    setInputs('');
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  };

  return (
    <div class="card single">
      <h5 class="card-header">
        Fill in the details below and I'll get back to you
      </h5>
      <form className="contact-form card-body" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" name="username" class="form-control" value={inputs.username || ""} onChange={handleChange} placeholder="Your name here" required></input>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" name="email" class="form-control"  value={inputs.email || ""} onChange={handleChange} placeholder="name@example.com" required></input>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea name="message" class="form-control"  value={inputs.message || ""} onChange={handleChange} rows="3" required></textarea>
        </div>
          <button type="button" className="btn btn-secondary">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm;
