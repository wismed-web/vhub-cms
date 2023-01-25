import { fetchNoBody, mEmpty } from "@/share/fetch"; // for deno test, append '.ts'; `deno run -A ./ping.ts`

export const ping = async () => {
    const rt = (await fetchNoBody(`/api/system/ver`, "GET", mEmpty, "")) as any[];
    if (rt[1] != 200) {
        alert(rt[0]);
        return false;
    }
    return true;
};

// (async () => {
//     console.log(await ping())
// })()
