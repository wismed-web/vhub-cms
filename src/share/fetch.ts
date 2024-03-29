import { URL_API } from "@/share/ip";

const ip = URL_API;

export const mEmpty = new Map<string, any>();

export const fetchBodyForm = async (
    path: string,
    method: string,
    mQuery: Map<string, any>,
    mForm: Map<string, any>,
    auth: string
) => {
    let url = ip + path.replace(/^\/+/, "");
    let payload: any;

    if (mQuery.size > 0) {
        const qryParams = new URLSearchParams();
        mQuery.forEach((v, k) => {
            qryParams.append(k, v);
        });
        url += "?" + qryParams;
    }

    if (mForm.size > 0) {
        const formData = new FormData();
        mForm.forEach((v, k) => {
            formData.append(k, v);
        });
        payload = formData;
    }

    try {
        const headers = {
            'Accept': "application/json",
            'Authorization': auth,
        };

        const resp = await fetch(url, {
            method: method,
            headers: headers,
            body: payload,
            mode: "cors",
        });

        if (!resp.ok) {
            const text = await resp.text();
            return new Promise((resolve, reject) => {
                // alert('Failed to fetch, got status ' + resp.status + ' @ ' + text)
                resolve([text, resp.status]);
            });
        }

        const json = await resp.json();
        return new Promise((resolve, reject) => {
            resolve([json, resp.status]);
        });
    } catch (e) {
        console.log(e + "\nnetwork error: " + url);
        alert(e + "\nnetwork error: " + url);
    }
};

// const mForm = new Map<string, any>()
// mForm.set("database", "myDb")
// mForm.set("collection", "myCol")
// let rt = await fetchBodyForm("api/entity/db", "PUT", emptyM, mForm)
// console.log(rt)

export const fetchBodyJsonStr = async (
    path: string,
    method: string,
    mQuery: Map<string, any>,
    payload: string,
    auth: string
) => {
    let url = ip + path.replace(/^\/+/, "");

    if (mQuery.size > 0) {
        const qryParams = new URLSearchParams();
        mQuery.forEach((v, k) => {
            qryParams.append(k, v);
        });
        url += "?" + qryParams;
    }

    try {
        const headers = {
            'Accept': "application/json",
            'Authorization': auth,
            'Content-Type': "application/json",
        };

        const resp = await fetch(url, {
            method: method,
            headers: headers,
            body: payload,
            mode: "cors",
        });

        if (!resp.ok) {
            const text = await resp.text();
            return new Promise((resolve, reject) => {
                // alert('Failed to fetch, got status ' + resp.status + ' @ ' + text)
                resolve([text, resp.status]);
            });
        }

        const json = await resp.json();
        return new Promise((resolve, reject) => {
            resolve([json, resp.status]);
        });
    } catch (e) {
        console.log(e + "\nnetwork error: " + url);
        alert(e + "\nnetwork error: " + url);
    }
};

export const fetchBodyObject = async (
    path: string,
    method: string,
    mQuery: Map<string, any>,
    body: any,
    auth: string
) => {
    let url = ip + path.replace(/^\/+/, "");
    let payload: any;

    if (mQuery.size > 0) {
        const qryParams = new URLSearchParams();
        mQuery.forEach((v, k) => {
            qryParams.append(k, v);
        });
        url += "?" + qryParams;
    }

    if (body != undefined && body != null) {
        const jsonBody = JSON.stringify(body);
        if (jsonBody.length > 0) {
            payload = jsonBody;
        }
    }

    try {
        const headers = {
            'Accept': "application/json",
            'Authorization': auth,
            'Content-Type': "application/json",
        };

        const resp = await fetch(url, {
            method: method,
            headers: headers,
            body: payload,
            mode: "cors",
        });

        if (!resp.ok) {
            const text = await resp.text();
            return new Promise((resolve, reject) => {
                // alert('Failed to fetch, got status ' + resp.status + ' @ ' + text)
                resolve([text, resp.status]);
            });
        }

        const json = await resp.json();
        return new Promise((resolve, reject) => {
            resolve([json, resp.status]);
        });
    } catch (e) {
        console.log(e + "\nnetwork error: " + url);
        alert(e + "\nnetwork error: " + url);
    }
};

export const fetchNoBody = async (
    path: string,
    method: string,
    mQuery: Map<string, any>,
    auth: string
) => {
    let url = ip + path.replace(/^\/+/, "");

    if (mQuery.size > 0) {
        const qryParams = new URLSearchParams();
        mQuery.forEach((v, k) => {
            qryParams.append(k, v);
        });
        url += "?" + qryParams;
    }

    try {
        const headers = {
            'Accept': "application/json",
            'Authorization': auth,
        };

        const resp = await fetch(url, {
            method: method,
            headers: headers,
            mode: "cors",
        });

        if (!resp.ok) {
            const text = await resp.text();
            return new Promise((resolve, reject) => {
                // alert('Failed to fetch, got status ' + resp.status + ' @ ' + text)
                resolve([text, resp.status]);
            });
        }

        const json = await resp.json();
        return new Promise((resolve, reject) => {
            resolve([json, resp.status]);
        });
    } catch (e) {
        console.log(e + "\nnetwork error: " + url);
        alert(e + "\nnetwork error: " + url);
    }
};