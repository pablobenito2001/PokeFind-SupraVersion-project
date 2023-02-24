import { defineStore } from "pinia";
import { useUnwrapData } from "../composables/useUnwrapData";

const regions = {
    'all': 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1008',
    'kanto': 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151',
    'jotho': 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100',
    'hoenn': 'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135',
    'sinnoh': 'https://pokeapi.co/api/v2/pokemon?offset=386&limit=107',
    'unova': 'https://pokeapi.co/api/v2/pokemon?offset=493&limit=156',
    'kalos': 'https://pokeapi.co/api/v2/pokemon?offset=649&limit=72',
    'alola': 'https://pokeapi.co/api/v2/pokemon?offset=721&limit=88',
    'galar': 'https://pokeapi.co/api/v2/pokemon?offset=809&limit=96',
    'paldea': 'https://pokeapi.co/api/v2/pokemon?offset=905&limit=103'
};

export const usePokemonStore = defineStore('filter', {
        state: () => ({ pokemonArr: [], filterArr: []}),
        getters: {
            getPokemon: (state) => state.pokemonArr,
        },
        actions: {
            async getPokemonData(region){
                try{
                    const json = (await (await fetch(regions[region])).json()).results;
                    this.pokemonArr = await useUnwrapData(json);
                }catch(e){
                    return e
                }
            },
            changeName(value){
                this.name = value;
            },
            changeRegion(value){
                this.region = value;
            },
            changeType(value){
                this.type = value;
            },
            changeFilterArr(value){
                this.filterArr = value;
            }
        }

})