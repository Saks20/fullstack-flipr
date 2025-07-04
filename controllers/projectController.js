import Project from '../models/Project.js';

export const getProjects = async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
};

export const createProject = async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
};
