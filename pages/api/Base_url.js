import axios from "axios";
import { BASE_API_URL } from "./apiVariables";
export const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
