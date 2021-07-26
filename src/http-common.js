import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:7000/users",
  headers: {
    "Content-type": "application/json"
  }
});
