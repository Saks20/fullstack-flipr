import Client from '../models/Client.js';

export const getClients = async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
};

export const createClient = async (req, res) => {
    const newClient = new Client(req.body);
    await newClient.save();
    res.status(201).json(newClient);
};
