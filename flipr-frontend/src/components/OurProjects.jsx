import React, { useEffect, useState } from 'react';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to load projects:', err));
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-4">
        {projects.map(project => (
          <li key={project._id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-600 underline" target="_blank">View</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsList;
