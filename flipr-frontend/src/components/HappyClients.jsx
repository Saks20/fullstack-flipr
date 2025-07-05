import React, { useEffect, useState } from 'react';

const HappyClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/clients')
      .then(res => res.json())
      .then(data => setClients(data))
      .catch(err => console.error('Error fetching clients:', err));
  }, []);

  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Happy Clients</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((c, i) => (
          <div key={i} className="border p-4 rounded shadow text-center">
            <img
              src={c.imageUrl || 'https://via.placeholder.com/150?text=No+Image'}
              alt={c.name}
              className="h-28 w-28 mx-auto object-cover rounded-full mb-2"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found';
              }}
            />
            <p className="italic text-sm mb-2">"{c.description}"</p>
            <h3 className="font-semibold text-md">{c.name}</h3>
            <p className="text-blue-600 text-sm">{c.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyClients;
