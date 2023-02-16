<script setup>
    import { ref, watchEffect } from 'vue';
    import { useSearchByName } from '../../../composables/useSearchByName.js';
    import { useUnwrapData } from '../../../composables/useUnwrapData.js';
    import Card from './Card.vue'

    const data = ref(null)
    const regions = ref({
        'default': 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1008',
        'kanto': 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151',
        'jotho': 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100',
        'hoenn': 'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135',
        'sinnoh': 'https://pokeapi.co/api/v2/pokemon?offset=386&limit=107',
        'unova': 'https://pokeapi.co/api/v2/pokemon?offset=493&limit=156',
        'kalos': 'https://pokeapi.co/api/v2/pokemon?offset=649&limit=72',
        'alola': 'https://pokeapi.co/api/v2/pokemon?offset=721&limit=88',
        'galar': 'https://pokeapi.co/api/v2/pokemon?offset=809&limit=96',
        'paldea': 'https://pokeapi.co/api/v2/pokemon?offset=905&limit=103'
    });

    async function getData({reg = 'default', name = null}){
        try{
            let j = (await (await fetch(regions.value[reg])).json()).results;
            j = await useSearchByName(j, name);
            data.value = await useUnwrapData(j);
        }catch(e){
            console.log(e)
        }
    }
    getData({reg: 'unova', name: 'e'});
</script>
<template>
    <div class="Container">
        <Card v-for="item in data" :name="item._name" :id="item._id" :image="item._image" :types="item._types"/>
    </div>
</template>
<style scoped lang="scss">
    button{
        color: black;
        padding: 10px;
        background-color: red;
        margin: 10px;
        cursor: pointer;
        &:active{
            background-color: yellow;
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
</style>