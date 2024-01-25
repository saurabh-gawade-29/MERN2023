import axios from "axios";
const URI = import.meta.env.VITE_API_URL;

export const serviceCallPost = async (url, data) => {
  try {
    const result = await axios.post(`${URI}${url}`, data);
    return result;
  } catch (error) {
    console.log(error, "service call error")
  }
};
