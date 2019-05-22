import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://webcamstravel.p.rapidapi.com/webcams/list",
  headers: {
    "X-RapidAPI-Host": "webcamstravel.p.rapidapi.com",
    "X-RapidAPI-Key": "yourApiKey"
  }
});

export default axiosConfig
