<script setup>
    import Card from './Card.vue'
    import { storeToRefs } from 'pinia';

    import { usePokemonStore } from '../../stores/usePokemonStore';
    import Loader from '../../assets/Loader.svg'

    const store = usePokemonStore();
    const { pokemonArr } = storeToRefs(store);

    store.getPokemonData('kalos');
</script>
<template>
    <div v-if="pokemonArr.length === 0 || !Array.isArray(pokemonArr)" class="Loading">
        <img :src="Loader" alt="loading" class="Loading-svg">
    </div>
    <div class="Container" v-else>
        <Card v-for="item in pokemonArr" :key="item.id" :name="item._name" :id="item._id" :image="item._image" :types="item._types"/>
    </div> 
</template>
<style scoped lang="scss">
    @keyframes loading {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
    .Container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-auto-rows: 11.25rem;
        gap: var(--gap);
        max-width: 1400px;
        margin: auto;
        padding: var(--gap) .625rem;
        color: black;
    }

    .Loading{
        display: flex;
        justify-content: center;
        align-items: center;
        &-svg{
            max-width: 150px;
            height: auto;
            animation: loading 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
        }
    }
</style>