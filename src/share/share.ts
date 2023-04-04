import { fetchBodyForm, fetchBodyJsonStr, fetchBodyObject, fetchNoBody, mEmpty } from "@/share/fetch";
import { URL_SIGN } from "@/share/ip"

export const loginUser = ref("");
export const loginAuth = ref("");
export const loginToken = ref("");
export const selfInfo = ref();
export const jsonHTML = ref("");
export const jsonTEXT = ref("");

//////////////////////////////////////////////////////////////////////////////////////

const fetchOK = async (fetchReturn: any) => {
    if (fetchReturn[1] != 200) {
        if (fetchReturn[0].includes("invalid or expired jwt")) {
            alert("session expired, redirecting to sign page")
            location.replace(`${URL_SIGN}`)
            return false
        }
        alert(fetchReturn[0])
        return false
    }
    return true
}

//////////////////////////////////////////////////////////////////////////////////////

// fill loginUser
const self = async () => {
    return (await getUserList(loginUser.value, ''))[0]
}

// fill loginUser
export const fillSelf = async () => {
    const rt = (await fetchNoBody(
        "api/user/auth/uname",
        "GET",
        mEmpty,
        loginAuth.value
    )) as any[];
    if (!await fetchOK(rt)) {
        return false
    }
    loginUser.value = rt[0];

    // *** login user profile ***
    selfInfo.value = await self()
    console.log(selfInfo.value)

    return true;
};

export const getUserList = async (uname: string, fields: string) => {
    // means list all fields. 
    // swagger 'Try' uses '{fields}' as empty path param, so we intentionally use this literal string
    if (fields == undefined || fields == null || fields.length == 0) {
        fields = "{fields}";
    }
    const mQuery = new Map<string, any>([
        ["uname", uname],
    ]);
    const rt = (await fetchNoBody(
        `api/admin/user/list/${fields}`,
        "GET",
        mQuery,
        loginAuth.value
    )) as any[];
    if (!await fetchOK(rt)) {
        return null
    }
    return rt[0];
};

export const getTemplate = async () => {
    const rt = (await fetchNoBody(
        `api/submit/template`,
        "GET",
        mEmpty,
        loginAuth.value
    )) as any[];
    if (!await fetchOK(rt)) {
        return null
    }
    return rt[0];
}

export const postSubmit = async (post: any, followee: string) => {
    const mQuery = new Map<string, any>([
        ["followee", followee],
    ]);
    const rt = (await fetchBodyObject(
        `api/submit/upload`,
        "POST",
        mQuery,
        post,
        loginAuth.value
    )) as any[];
    if (!await fetchOK(rt)) {
        return null
    }
    return rt[0];
}