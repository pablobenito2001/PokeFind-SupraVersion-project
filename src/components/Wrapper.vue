<script setup>
import Nav from './Nav.vue';
</script>
<template>
    <Nav />  
    <div class="Wrapper">
        sa
    </div>
</template>
<style scoped lang="scss">
    .Wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        grid-auto-rows: auto;
        gap: var(--gap);
        max-width: 1350px;
        margin: auto;
    }
</style>