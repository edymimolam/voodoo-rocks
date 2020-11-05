import axios from "axios";

const BASE_URL = "http://jsonplaceholder.typicode.com/";

export const server = axios.create({ baseURL: BASE_URL });
