import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '' });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(() => alert('Submitted!'))
      .catch(() => alert('Submission failed.'));
  };

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-lg mx-auto">
        <input type="text" name="name" placeholder="Full Name" required className="border p-2 rounded" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" required className="border p-2 rounded" onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Mobile Number" required className="border p-2 rounded" onChange={handleChange} />
        <input type="text" name="city" placeholder="City" required className="border p-2 rounded" onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Get Quick Quote</button>
      </form>
    </section>
  );
};

export default ContactForm;
