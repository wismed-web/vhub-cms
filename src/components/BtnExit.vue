<template>
    <a class="float" @click="ToMainSite()">
        <font-awesome-icon icon="right-from-bracket" class="floating" />
    </a>
</template>

<script setup lang="ts">
import { URL_MAIN } from "@/share/ip";
const ToMainSite = async () => { location.replace(`${URL_MAIN}`) };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #bbb;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
}

.float:hover {
    background-color: rgb(15, 169, 246);
    cursor: pointer;
}

.floating {
    margin-top: 22px;
    color: white;
}
</style>
