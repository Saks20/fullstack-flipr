// controllers/newsletterController.js
import Newsletter from '../models/Newsletter.js';

export const subscribeNewsletter = async (req, res) => {
  try {
    const existing = await Newsletter.findOne({ email: req.body.email });
    if (existing) {
      return res.status(409).json({ message: 'Email already subscribed' });
    }

    const newSubscriber = new Newsletter(req.body);
    await newSubscriber.save();
    res.status(200).json({ message: 'Successfully subscribed!' });
  } catch (err) {
    res.status(500).json({ error: 'Newsletter subscription failed.' });
  }
};

export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find();
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch subscribers.' });
  }
};
