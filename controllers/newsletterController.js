import Newsletter from '../models/Newsletter.js';

export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find();
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch subscribers.' });
  }
};
