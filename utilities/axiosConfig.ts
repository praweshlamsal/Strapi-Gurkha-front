import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://strapigurkha.herokuapp.com/api/",
  timeout: 1000,
  headers: {
    accepts: "application/json",
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
  },
});
