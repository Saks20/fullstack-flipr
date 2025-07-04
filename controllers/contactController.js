import Contact from '../models/Contact.js';

export const getContacts = async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
};

export const createContact = async (req, res) => {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
};
