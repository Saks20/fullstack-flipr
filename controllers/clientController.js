import Client from '../models/Client.js';

export const createClient = async (req, res) => {
    try {
        const newClient = new Client(req.body);
        await newClient.save();
        res.status(201).json({ message: 'Client saved!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save client.' });
    }
};

export const getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch clients.' });
    }
};
