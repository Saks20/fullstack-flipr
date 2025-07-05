import React, { useEffect, useState } from 'react';

const OurProjects = () => {
  const [projects, setProjects] = useState([]);

useEffect(() => {
  fetch('http://localhost:5000/api/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
    .catch(err => console.error('Error fetching projects:', err));
}, []);

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="border p-4 rounded shadow">
            <img src={proj.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'}
                  alt={proj.name}
                  className="h-40 w-full object-cover mb-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
              }}/>
            <h3 className="font-bold">{proj.name}</h3>
            <p>{proj.description}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
