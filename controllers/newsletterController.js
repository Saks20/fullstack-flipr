import Newsletter from '../models/Newsletter.js';

export const getSubscribers = async (req, res) => {
    const subscribers = await Newsletter.find();
    res.json(subscribers);
};

export const subscribe = async (req, res) => {
    const { email } = req.body;
    const exists = await Newsletter.findOne({ email });
    if (exists) return res.status(409).json({ message: 'Already subscribed' });

    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();
    res.status(201).json(newSubscriber);
};
