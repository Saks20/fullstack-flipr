import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: String,
    description: String,
    designation: String,
    imageUrl: String
});

const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);
export default Client;
