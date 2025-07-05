const API = import.meta.env.VITE_API_URL; // ✅ Correct declaration

const fetchAll = async () => {
  try {
    const [cRes, sRes] = await Promise.all([
      fetch(`${API}/api/contact`),
      fetch(`${API}/api/newsletter`)
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

const addProject = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`${API}/api/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    });

    if (res.ok) {
      alert('✅ Project added!');
      setProject({ title: '', description: '', link: '' });
    } else {
      const data = await res.json();
      alert(`❌ Project error: ${data.error || 'Something went wrong'}`);
    }
  } catch (err) {
    alert(`❌ Network error: ${err.message}`);
  }
};

const addClient = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`${API}/api/clients`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client)
    });

    if (res.ok) {
      alert('✅ Client added!');
      setClient({ name: '', description: '', designation: '', imageUrl: '' });
    } else {
      const data = await res.json();
      alert(`❌ Client error: ${data.error || 'Something went wrong'}`);
    }
  } catch (err) {
    alert(`❌ Network error: ${err.message}`);
  }
};
