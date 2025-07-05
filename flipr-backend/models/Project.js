import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String
});
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
export default Project;

