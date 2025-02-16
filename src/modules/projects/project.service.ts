import { TProject } from "./project.interface";
import Project from "./project.model";

const CreateProjectInDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProjectsFromDB = async () => {
  const result = await Project.find({});
  return result;
};

const getSingleProjectFromDB = async (id: string) => {
  const result = await Project.findOne({ _id: id });
  return result;
};

const updateProjectInDB = async (id: string, payload: TProject) => {
  const result = await Project.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteProjectInDB = async (id: string) => {
  const result = await Project.findOneAndDelete({ _id: id });
  return result;
};

export const projectService = {
  CreateProjectInDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  updateProjectInDB,
  deleteProjectInDB,
};
