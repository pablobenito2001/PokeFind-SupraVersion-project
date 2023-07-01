<template>
    <template v-if="!error">
        <Loader v-if="!loader"/>
        <template v-else>
            <PokemonHeader 
            :name="pokemon.name" 
            :id="pokemon.id" 
            :types="pokemon.types" 
            :sprite="pokemon.sprite" 
            :abilities="pokemon.abilities" 
            :height="pokemon.height" 
            :weight="pokemon.weight"/>
            <PokemonStats :stats="pokemon.stats"/>
        </template>
    </template>
    <ErrorShow v-else :error="error.message"/>
</template>
<script lang='ts' setup>
    import Loader from '../../components/Loaders/Loader.vue';
    import ErrorShow from '../../components/Loaders/ErrorShow.vue';
    import PokemonHeader from './PokemonHeader.vue';
    import PokemonStats from './PokemonStats.vue';

    import { useGetPokemon } from '../../composables/useGetPokemon';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    
    const { pokemon, error, loader, getPokemon } = useGetPokemon(route.params.pokemon as string | number);

</script>
<style lang='scss' scoped>

</style>