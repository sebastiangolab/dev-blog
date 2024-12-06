import axios from "axios";

const AxiosWP = axios.create({
  baseURL: process.env.WORDPRESS_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosWP;
