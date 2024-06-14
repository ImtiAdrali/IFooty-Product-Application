import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Authorization": localStorage.getItem("token") !== null ? `Bearer ${localStorage.getItem("token")}` : ""
    }
});

export default api;