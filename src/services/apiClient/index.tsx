import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://prologapp.com/prolog/api/v3";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-prolog-api-token": import.meta.env.VITE_API_TOKEN,
  },
});
