<template>
    <input class="kw" type="text" :placeholder="hint" :title="hint" />
</template>

<script setup lang="ts">

const hint = ref("Keywords (separated by semicolon(;))")

onMounted(async () => { });
watchEffect(() => { });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kw {
    position: relative;
    float: right;
    width: 48%;
    font-weight: bold;
    text-align: left;
    margin-top: 1%;
    margin-bottom: 1%;
    padding-left: 1%;
}
</style>
