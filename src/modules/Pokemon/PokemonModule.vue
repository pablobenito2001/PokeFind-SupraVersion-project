<template>
    <template v-if="!error">
        <Loader v-if="!loader"/>
        <PokemonLayout v-else>
            <PokemonHeader 
            :name="pokemon.name" 
            :id="pokemon.id" 
            :types="pokemon.types" 
            :sprite="pokemon.image" 
            :abilities="pokemon.abilities" 
            :height="pokemon.height" 
            :weight="pokemon.weight"/>
        </PokemonLayout>
    </template>
    <ErrorShow v-else :error="error.message"/>
</template>
<script lang='ts' setup>
    import Loader from '../../components/Loaders/Loader.vue';
    import ErrorShow from '../../components/Loaders/ErrorShow.vue';
    import PokemonLayout from '../../layout/Pokemon/PokemonLayout.vue';
    import PokemonHeader from './PokemonHeader.vue';

    import { useGetPokemon } from '../../composables/useGetPokemon';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    
    const { pokemon, error, loader, getPokemon } = useGetPokemon(route.params.pokemon as string | number);

</script>
<style lang='scss' scoped>

</style>