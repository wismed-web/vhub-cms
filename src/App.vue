<template>
    <header v-if="display">
        <MainTitle />
    </header>

    <main v-if="display" id="container">
        <InputTitle />
        <span>
            <InputCategory />
            <InputKeyword />
        </span>
        <InputContent />
        <BtnSubmit />
        <BtnExit />
    </main>

    <footer v-if="display">
    </footer>
</template>

<script setup lang="ts">

import { useCookies } from "vue3-cookies";
import { loginAuth, loginToken, loginUser, fillSelf } from "@/share/share";
import MainTitle from "@/components/MainTitle.vue";
import BtnSubmit from "@/components/BtnSubmit.vue";
import BtnExit from "@/components/BtnExit.vue";
import InputTitle from "@/components/1_Title.vue"
import InputCategory from "@/components/2_Category.vue"
import InputKeyword from "@/components/3_Keyword.vue"
import InputContent from "@/components/4_Content.vue"

const { cookies } = useCookies();

const display = ref(false);

onMounted(async () => {

    // *** from url string. (no longer used) ***
    // // ref: https://www.samanthaming.com/tidbits/86-window-location-cheatsheet/

    // const pName = window.location.href.indexOf("name=");
    // const pKind = window.location.href.indexOf("kind=");
    // const pAuth = window.location.href.indexOf("auth=");
    // // alert(`${pName} : ${pKind} : ${pAuth}`)

    // const name = pName >= 0 ? decodeURI(window.location.href.substring(pName + 5, pKind - 1)) : "";
    // const kind = pKind >= 0 ? decodeURI(window.location.href.substring(pKind + 5, pAuth - 1)) : "";
    // const auth = pAuth >= 0 ? decodeURI(window.location.href.substring(pAuth + 5)) : "";

    // loginToken.value = auth;
    // loginAuth.value = "Bearer " + auth;
    // itemName.value = name;
    // itemKind.value = kind;

    // *** from cookie ***
    // console.log(`${window.location.hostname} + ---> + ${cookies.keys()}`)

    const token = cookies.get("token");
    loginToken.value = token;
    loginAuth.value = "Bearer " + token;

    console.log("[App.vue] Token:", window.location.hostname, " -- ", token)

    if (loginToken.value.length < 128) {
        alert("invalid auth");
        display.value = false;
    } else {
        await fillSelf(); // fill loginUser, already 'ping' back-end api; in this, need to read 'loginAuth.value'
        await new Promise((f) => setTimeout(f, 500));
        if (loginUser.value.length > 0) {
            display.value = true;
        }
    }
});

</script>

<style scoped>
#container {
    width: 60%;
    height: 100%;
    margin: auto;
    overflow: scroll;
    scrollbar-width: none;
    /* background-color: rgb(220, 220, 220); */
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

#container::-webkit-scrollbar {
    display: none;
}
</style>
