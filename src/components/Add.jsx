import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../features/postSlice";

function Add() {
  const dispatch = useDispatch();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  const getPostData = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  console.log({ post });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(post));

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
            onChange={getPostData}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            name="content"
            onChange={getPostData}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
