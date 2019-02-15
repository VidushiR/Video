import axios from "axios";
const KEY = "AIzaSyB4ilkoJVloWPdeP4JkLUy-qpfb3SU_tAU";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});
