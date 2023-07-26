import axios from "axios";

export default axios.create({
  baseURL: "https://64bc11a77b33a35a4446fff0.mockapi.io/crud",
  headers: {
    "Content-Type": "application/json",
  },
});
