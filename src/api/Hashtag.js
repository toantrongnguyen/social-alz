import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040/api";

export const fetchAll = () => axios.get("/hashtag");

export const create = (data) => axios.post("/hashtag", data);