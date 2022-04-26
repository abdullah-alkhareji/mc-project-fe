import axios from "axios";

export const baseUrl = "http://127.0.0.1:8000";
export const baseUrlFe = "http://127.0.0.1:3000";
export const instance = axios.create({
  baseURL: `${baseUrl}/`,
});
