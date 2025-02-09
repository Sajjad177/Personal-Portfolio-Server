import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  gitClientLink: {
    type: String,
    required: true,
  },
  gitServerLink: {
    type: String,
    required: true,
  },
  frontendTech: {
    type: [String],
    required: true,
  },
  backendTech: {
    type: [String],
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;