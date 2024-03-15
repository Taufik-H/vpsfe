import { API_URL } from "@/utils/ApiUrl";

const axios = require("axios");

export const ApiService = axios.create({
  baseURL: API_URL,
});
