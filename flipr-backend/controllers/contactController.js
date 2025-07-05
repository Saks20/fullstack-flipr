import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit contact form.' });
    }
};
