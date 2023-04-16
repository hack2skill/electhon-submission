import axios from "axios";

export const BASE_URL =
    "https://1ae7-2409-408c-8d9e-5af9-e4c1-762f-2d0-ff09.ngrok-free.app";

export const service = axios.create({
    baseURL: "https://cbc7-119-161-98-68.ngrok-free.app",
    headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
    }),
    validateStatus: function(status) {
        return status >= 200 && status < 400;
    },
});