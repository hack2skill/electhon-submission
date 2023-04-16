import { BASE_URL } from "./fetch";

export function ping() {
    return fetch(`${BASE_URL}/ping`, {
            method: "get",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
        })
        .then((res) => res.data)
        .catch((err) => Promise.reject(err));
}

export function generateSlogan(sloganObj) {
    return fetch(`${BASE_URL}/api/generate?type=slogan`, {
            method: "post",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
            body: JSON.stringify(sloganObj),
        })
        .then((res) => res.json())
        .catch((err) => Promise.reject(err));
}

export function saveSlogan(sloganObj) {
    return fetch(`${BASE_URL}/api/saveAndLaunchPosters`, {
            method: "post",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
            body: JSON.stringify(sloganObj),
        })
        .then((res) => res.json())
        .catch((err) => Promise.reject(err));
}

export function generateJingle(sloganObj) {
    return fetch(`${BASE_URL}/api/generate?type=jingles`, {
            method: "post",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
            body: JSON.stringify(sloganObj),
        })
        .then((res) => res.json())
        .catch((err) => Promise.reject(err));
}

export function saveJingle(sloganObj) {
    return fetch(`${BASE_URL}/api/saveAndLaunchJingles`, {
            method: "post",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
            body: JSON.stringify(sloganObj),
        })
        .then((res) => res.json())
        .catch((err) => Promise.reject(err));
}

export function getSlogans() {
    return fetch(`${BASE_URL}/api/list?type=slogans`, {
            method: "get",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
        })
        .then((res) => res.json())
        .catch((err) => Promise.reject(err));
}

export function getJingles() {
    return fetch(`${BASE_URL}/api/list?type=jingles`, {
            method: "get",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
        })
        .then((res) => res.json())
        .catch((err) => Promise.reject(err));
}