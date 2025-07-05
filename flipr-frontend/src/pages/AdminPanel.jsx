import React, { useState, useEffect } from 'react';

const TabButton = ({ title, active, onClick }) => (
  <button
    className={`px-4 py-2 border-b-2 transition-all ${
      active ? 'border-blue-600 font-semibold' : 'border-transparent text-gray-500 hover:text-blue-600'
    }`}
    onClick={onClick}
  >
    {title}
  </button>
);

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const [project, setProject] = useState({ name: '', description: '', imageUrl: '' });
  const [client, setClient] = useState({ name: '', description: '', designation: '', imageUrl: '' });

  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = setter => e => setter(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const fetchAll = async () => {
    try {
      const [cRes, sRes] = await Promise.all([
        fetch('http://localhost:5000/api/contact'),
        fetch('http://localhost:5000/api/newsletter')
      ]);
      const cData = await cRes.json();
      const sData = await sRes.json();
      setContacts(cData);
      setSubscribers(sData);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const addProject = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    });
    if (res.ok) {
      alert('Project added!');
      setProject({ name: '', description: '', imageUrl: '' });
    }
  };

  const addClient = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client)
    });
    if (res.ok) {
      alert('Client added!');
      setClient({ name: '', description: '', designation: '', imageUrl: '' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 text-gray-800">
      <h1 className="text-2xl font-bold text-center">Admin Panel</h1>

      <div className="flex space-x-4 border-b mb-6">
        <TabButton title="Projects" active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} />
        <TabButton title="Clients" active={activeTab === 'clients'} onClick={() => setActiveTab('clients')} />
        <TabButton title="Contacts" active={activeTab === 'contacts'} onClick={() => setActiveTab('contacts')} />
        <TabButton title="Subscribers" active={activeTab === 'subscribers'} onClick={() => setActiveTab('subscribers')} />
      </div>

      {activeTab === 'projects' && (
        <form onSubmit={addProject} className="grid gap-4">
          <h2 className="text-lg font-semibold">Add Project</h2>
          <input name="name" placeholder="Project Name" value={project.name} onChange={handleChange(setProject)} className="border p-2 rounded" required />
          <input name="description" placeholder="Project Description" value={project.description} onChange={handleChange(setProject)} className="border p-2 rounded" required />
          <input name="imageUrl" placeholder="Image URL" value={project.imageUrl} onChange={handleChange(setProject)} className="border p-2 rounded" />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Submit Project</button>
        </form>
      )}

      {activeTab === 'clients' && (
        <form onSubmit={addClient} className="grid gap-4">
          <h2 className="text-lg font-semibold">Add Client</h2>
          <input name="name" placeholder="Client Name" value={client.name} onChange={handleChange(setClient)} className="border p-2 rounded" required />
          <input name="description" placeholder="Client Description" value={client.description} onChange={handleChange(setClient)} className="border p-2 rounded" required />
          <input name="designation" placeholder="Designation" value={client.designation} onChange={handleChange(setClient)} className="border p-2 rounded" required />
          <input name="imageUrl" placeholder="Image URL" value={client.imageUrl} onChange={handleChange(setClient)} className="border p-2 rounded" />
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Submit Client</button>
        </form>
      )}

      {activeTab === 'contacts' && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Submissions</h2>
          {loading ? <p>Loading contacts...</p> : (
            <ul className="space-y-2">
              {contacts.map((c, idx) => (
                <li key={idx} className="border-b pb-2">
                  <strong>{c.name}</strong> — {c.email} — {c.phone} — {c.city}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {activeTab === 'subscribers' && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Newsletter Subscribers</h2>
          {loading ? <p>Loading subscribers...</p> : (
            <ul className="space-y-2">
              {subscribers.map((s, idx) => (
                <li key={idx} className="border-b pb-1">{s.email}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
