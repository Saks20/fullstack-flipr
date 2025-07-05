import Project from '../models/Project.js';

export const createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json({ message: 'Project created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create project.' });
    }
};

export const getProjects = async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
};
