import { useState } from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../features/postSlice";

function UpdatePost() {
  const { id } = useParams();

  console.log({ id });
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [updateData, setUpdateData] = useState();

  const { posts } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singlePost = posts.filter((ele) => Number(ele.id) === Number(id));
      setUpdateData(singlePost[0]);
    }
  }, [id, posts]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log({ post });
    dispatch(updatePost(updateData));
    navigate("/");
  };
  return (
    <div className="container w-50">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={updateData && updateData.title}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            name="content"
            value={updateData && updateData.content}
            onChange={newData}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdatePost;
