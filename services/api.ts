import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.162:3000/auth/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
