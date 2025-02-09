import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogService } from "./blog.service";

const createBlog = catchAsync(async (req, res): Promise<any> => {
  let blogData;
  try {
    if (!req.body.data) {
      return res
        .status(400)
        .json({ success: false, message: "No data provided" });
    }
    blogData = JSON.parse(req.body.data);
  } catch (error) {
    return res.status(400).json({ success: false, message: "Invalid data" });
  }

  const result = await blogService.CreateBlogInDB({
    ...blogData,
    image: req.file?.path,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await blogService.getAllBlogsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs retrieved successfully",
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res): Promise<any> => {
  const { id } = req.params;

  let blogData;
  try {
    if (!req.body.data) {
      return res
        .status(400)
        .json({ success: false, message: "No data provided" });
    }
    blogData = JSON.parse(req.body.data);
  } catch (error) {
    return res.status(400).json({ success: false, message: "Invalid data" });
  }

  const imagePath = req.file ? req.file.path : blogData.image;

  const result = await blogService.updateBlogInDB(id, {
    ...blogData,
    image: imagePath,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  await blogService.deleteBlogInDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog deleted successfully",
    data: null,
  });
});

export const blogController = {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
};
