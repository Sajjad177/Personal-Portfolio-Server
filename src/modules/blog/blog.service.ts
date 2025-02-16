import { TBlog } from "./blog.interface";
import Blog from "./blog.model";

const CreateBlogInDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find({});
  return result;
};


const getSingleBlogFromDB = async (id: string) => {
  const result = await Blog.findOne({ _id: id });
  return result
}



const updateBlogInDB = async (id: string, payload: TBlog) => {
  const result = await Blog.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteBlogInDB = async (id: string) => {
  const result = await Blog.findOneAndDelete({ _id: id });
  return result;
};

export const blogService = {
  CreateBlogInDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
  updateBlogInDB,
  deleteBlogInDB,
};
