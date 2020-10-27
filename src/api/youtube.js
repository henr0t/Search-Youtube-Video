import axios from "axios";

const KEY = "AIzaSyCXzMswXdM9AixF5s763ChB0e9phZZN46M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
