<script setup>
    import Card from './Card.vue';
    import { usePokemonFilter } from '../../composables/usePokemonFilter';

    const { resultArray ,getDataPokemon } = usePokemonFilter();

    getDataPokemon();
</script>
<template>
    <div class="Wrapper">
        <div class="Wrapper-cards" >
        <Card v-for="item in resultArray" :key="item._id" :name="item._name" :id="item._id" :image="item._image" :types="item._types"/>
        </div> 
        <div class="Wrapper-buttons">

        </div>
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
    .Wrapper{
        max-width: 1400px;
        margin: auto;
        &-cards{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-auto-rows: 11.25rem;
        gap: var(--gap);
        padding: var(--gap) .625rem;
        color: black;
    }
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