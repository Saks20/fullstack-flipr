import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    city: String,
    createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export default Contact;

