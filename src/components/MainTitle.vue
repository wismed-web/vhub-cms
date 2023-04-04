<template>
    <div>
        <span class="title"> Sharing Your Medical Thoughts and Experience ... </span>
        <span class="user"> {{ loginUser }} </span>
        <hr class="sep" />
    </div>
</template>

<script setup lang="ts">

import { loginUser } from "@/share/share";

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    font-size: medium;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-style: italic;
    margin-left: 0.5%;
}

.user {
    float: right;
    font-style: italic;
    margin-top: 0.2%;
    margin-right: 1%;
}

.sep {
    margin-top: 0.5%;
    margin-bottom: 1%;
}
</style>
