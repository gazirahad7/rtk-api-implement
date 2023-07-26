import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import PostService from "../services/PostService";

//const myAPI = "https://nodejs-mysql-api-endpoint-pi7r.vercel.app/api/v1/posts";

//https://64bc11a77b33a35a4446fff0.mockapi.io/crud
const myAPI = "https://64bc11a77b33a35a4446fff0.mockapi.io/crud";
const initialState = {
  posts: [],
  loading: false,
  error: null,
  searchData: [],
};

export const showPost = createAsyncThunk("showPost", async () => {
  //const res = await PostService.getAll();
  const res = await axios.get(myAPI);

  return res.data;
});
export const createPost = createAsyncThunk("createPost", async (data) => {
  //  const res = await PostService.create(post);
  console.log({ data });
  const res = await axios.post(myAPI, data);
  return res.data;
});
export const updatePost = createAsyncThunk("updatePost", async (data) => {
  console.log({ data });
  const res = await axios.put(`${myAPI}/${data.id}`, data);
  return res.data;
});

//delete action
export const deletePost = createAsyncThunk("deletePost", async (id) => {
  const res = await axios.delete(`${myAPI}/${id}`);

  return res.data;
});

// create
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    searchPost: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(showPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(showPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        // state.posts = action.payload;
        state.error = action.error.message;
      })
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.map((el) =>
          el.id === action.payload.id ? action.payload : el
        );
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.posts = state.posts.filter((ele) => ele.id != id);
        }
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      });
  },
});

export default postSlice.reducer;
export const { searchPost } = postSlice.actions;
