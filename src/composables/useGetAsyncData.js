import { ref } from 'vue';

export function useGetAsyncData({ region = 'default', type = null, name = null }){
    const result = ref(null);
    const error = ref(null);

    const filters = ref({
        regions: {
            'default': 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1008',
            'kanto': 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151',
            'jotho': 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100',
            'hoenn': 'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135',
            'sinnoh': 'https://pokeapi.co/api/v2/pokemon?offset=386&limit=107',
            'unova': 'https://pokeapi.co/api/v2/pokemon?offset=495&limit=1154',
            'kalos': 'https://pokeapi.co/api/v2/pokemon?offset=649&limit=72',
            'alola': 'https://pokeapi.co/api/v2/pokemon?offset=721&limit=88',
            'galar': 'https://pokeapi.co/api/v2/pokemon?offset=809&limit=96',
            'paldea': 'https://pokeapi.co/api/v2/pokemon?offset=905&limit=103'
        }
    });

    (async function request(){
        try{
            let data = await (await fetch(filters.value.regions[region])).json();
            result.value = data.results;
        }catch(e){  
            console.log(e, e.status)
            error.value = e;
        }
    })();

    return {
        data: result,
        error: error
    };
}