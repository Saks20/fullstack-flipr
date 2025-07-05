import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = e => {
    e.preventDefault();
    fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(() => alert('Subscribed!'))
      .catch(() => alert('Subscription failed.'));
  };

  return (
    <section className="p-6 bg-gray-200">
      <h2 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-1 border p-2 rounded"
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
