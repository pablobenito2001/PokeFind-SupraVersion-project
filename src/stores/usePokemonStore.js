import { defineStore } from "pinia";
import { useUnwrapData } from "../utils/useUnwrapData";

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
        state: () => ({ pokemonArr: [], name: '', type: '' }),
        getters: {
            getPokemon: (state) => state.pokemonArr,
            getNameKey: (state) => state.name,
            getTypeKey: (state) => state.type
        },
        actions: {
            async getPokemonData(region){
                this.pokemonArr.length = 0;
                try{
                    const json = (await (await fetch(regions[region])).json()).results; 
                    this.pokemonArr = await useUnwrapData(json);
                }catch(e){
                    this.pokemonArr = new Error('Algo salio mal en el store get.')
                }
            },
            setName(value){
                this.name = value;
            },
            setType(value){
                this.type = value;
            }
        }

})