import Project from '../models/Project.js';

export const createProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json({ message: 'Project created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create project.' });
    }
};

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch projects.' });
    }
};
