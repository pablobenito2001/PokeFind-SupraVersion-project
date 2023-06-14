import { ref } from "vue"
import API from "../services/API";
import type PokemonInterface from "../interfaces/PokemonInterface";

function chooseRegion(region: string){
    switch(region){
        case 'all': 
            return '?offset=0&limit=1008';
        case 'kanto':
            return '?offset=0&limit=151';
        case 'jotho':
            return '?offset=151&limit=100';
        case 'hoenn': 
            return '?offset=251&limit=135';
        case 'sinnoh': 
            return '?offset=386&limit=107';
        case 'unova':
            return '?offset=493&limit=156';
        case 'kalos':
            return '?offset=649&limit=72';
        case 'alola': 
            return '?offset=721&limit=88';
        case 'galar': 
            return '?offset=809&limit=96';
        case 'paldea':
            return '?offset=905&limit=103';
        default: 
            return ''
    }
}


type PokemonResponse = {
    id: number;
    sprites: any;
    stats: any[];
    types: any[];
    name: string;
}

export const useGetPokemon = (region: string) => {
    const fetchData = ref<PokemonInterface[]>([]);
    const errorLocal = ref<Error | null>(null);
    const loading = ref<boolean>(false);

    async function getData(to: string){
        loading.value = false;
        try{
            const rawData: Awaited<Response> = await API.fetchPokemonRegion(chooseRegion(to));
            const dataJSON: Awaited<{ results: { name: string, url: string }[] }> = await rawData.json(); 
            const allPokemon: Awaited<PokemonResponse[]> = await API.fetchMultiplePokemon<PokemonResponse>(dataJSON.results);
            if(rawData.ok){
                fetchData.value = allPokemon.map(((poke: PokemonResponse, index: number) => {
                    return {
                        name: poke.name,
                        image: poke.sprites.front_default,
                        types: poke.types.map((elem: any) => elem.type.name),
                        id: poke.id,
                        stats: poke.stats
                    };
                }));
                loading.value = true;
            }else{
                throw new Error('Something went wrong' + rawData.status + ' ' + rawData.statusText);
            }
        }catch(e){
            console.error(e);
            if (e instanceof Error) {
                errorLocal.value = e
            }
        }
    }
    getData(region)

    return {
        fetchData,
        errorLocal,
        loading,
        getData
    }
}