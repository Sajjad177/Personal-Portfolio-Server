import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectService } from "./project.service";

const CreateProject = catchAsync(async (req, res): Promise<any> => {
  let projectData;
  try {
    if (!req.body.data) {
      return res
        .status(400)
        .json({ success: false, message: "No data provided" });
    }
    projectData = JSON.parse(req.body.data);
  } catch (error) {
    return res.status(400).json({ success: false, message: "Invalid data" });
  }

  const result = await projectService.CreateProjectInDB({
    ...projectData,
    image: req.file?.path,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const result = await projectService.getAllProjectsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Projects retrieved successfully",
    data: result,
  });
});

const getSingeleProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectService.getSingleProjectFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project retrieved successfully",
    data: result,
  });
});

const updateProject = catchAsync(async (req, res): Promise<any> => {
  const { id } = req.params;

  let projectData;
  try {
    if (!req.body.data) {
      return res
        .status(400)
        .json({ success: false, message: "No data provided" });
    }
    projectData = JSON.parse(req.body.data);
  } catch (error) {
    return res.status(400).json({ success: false, message: "Invalid data" });
  }

  const imagePath = req.file ? req.file.path : projectData.image;

  const result = await projectService.updateProjectInDB(id, {
    ...projectData,
    image: imagePath,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  await projectService.deleteProjectInDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project deleted successfully",
    data: null,
  });
});

export const projectController = {
  CreateProject,
  getAllProjects,
  getSingeleProject,
  updateProject,
  deleteProject,
};
