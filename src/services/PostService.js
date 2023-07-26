import http from "../http-common";

const getAll = () => {
  return http.get("/");
};
const create = () => {
  return http.post("/");
};
const update = () => {
  return http.put("/");
};
const deletePost = () => {
  return http.delete("/");
};

const PostService = {
  getAll,
  create,
  update,
  deletePost,
};

export default PostService;
