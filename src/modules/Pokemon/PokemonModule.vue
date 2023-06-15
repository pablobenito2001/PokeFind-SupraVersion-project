<template>
    <Loader v-if="!loader"/>
    <template v-else>
        {{ pokemon.name }}
    </template>
</template>
<script lang='ts' setup>
    import Loader from '../../components/Loaders/Loader.vue';

    import { useGetPokemon } from '../../composables/useGetPokemon';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    
    const { pokemon, error, loader, getPokemon } = useGetPokemon(route.params.pokemon as string | number);

</script>
<style lang='scss' scoped>

</style>