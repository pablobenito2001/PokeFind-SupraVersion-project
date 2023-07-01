import { ref } from "vue"
import { fetchMultiplePokemon, fetchPokemonRegion } from "../services/API";
import { PokemonAPI, PokemonAPIType, PokemonViewCard } from "../interfaces/PokemonAPI";
import { ResponseAPI } from "../interfaces/ResponseAPI";

function chooseRegion(region: string){
    switch(region){
        case 'all': 
            return '?offset=0&limit=1008';
        case 'kanto':
            return '?offset=0&limit=151';
        case 'johto':
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

export const useGetPokemonList = (region: string) => {
    const fetchData = ref<PokemonViewCard[]>([]);
    const errorLocal = ref<Error | null>(null);
    const loading = ref<boolean>(false);

    async function getData(to: string){
        loading.value = false;
        try{
            const rawData: Awaited<ResponseAPI> = await fetchPokemonRegion(chooseRegion(to));
            const allPokemon: Awaited<PokemonAPI[]> = await fetchMultiplePokemon(rawData);
            fetchData.value = allPokemon.map((elem: PokemonAPI) => {
                return {
                    id: elem.id,
                    name: elem.species.name,
                    sprite: elem.sprites.front_default,
                    types: elem.types.map((elem: PokemonAPIType) => elem.type.name)
                }
            })
            loading.value = true;
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