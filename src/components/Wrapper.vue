<script setup>
    import Nav from './Nav.vue';
    import { useGetAsyncData } from '../composables/useGetAsyncData';

    const { data, error } = useGetAsyncData('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50');
</script>
<template>
    <Nav />  
    <div class="Wrapper">
        {{ data }}
    </div>
</template>
<style scoped lang="scss">
    .Wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
        grid-auto-rows: auto;
        gap: var(--gap);
        max-width: 1350px;
        margin: auto;
        color: black;
    }
</style>