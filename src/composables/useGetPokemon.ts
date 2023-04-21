import { ref, watch } from "vue"
import API from "../services/API";
import type { Ref } from "vue";
import type PokemonInterface from "../interfaces/PokemonInterface";
import { FilterByName } from '../utils/FilterByName'

const regions: object = {
    'all': '?offset=0&limit=1008',
    'kanto': '?offset=0&limit=151',
    'jotho': '?offset=151&limit=100',
    'hoenn': '?offset=251&limit=135',
    'sinnoh': '?offset=386&limit=107',
    'unova': '?offset=493&limit=156',
    'kalos': '?offset=649&limit=72',
    'alola': '?offset=721&limit=88',
    'galar': '?offset=809&limit=96',
    'paldea': '?offset=905&limit=103'
};

export const useGetPokemon = () => {
    const NameKey = ref<string>('');
    const TypeKey = ref<string>('all');
    const RegionKey = ref<string>('alola');
    const DataLocal = ref<PokemonInterface[]>([]);
    const DataClone = ref<PokemonInterface[]>([]);
    const ErrorLocal = ref<Error | null | string>(null);

    (async () => {
        try{
            const res = await API.fetchPokemonRegion<PokemonInterface[]>(regions[RegionKey.value]);
            DataLocal.value = res;
            DataClone.value = res;
        }catch(e){
            console.error(e);
            if (typeof e === "string") {
                ErrorLocal.value = e.toUpperCase();
            } else if (e instanceof Error) {
                ErrorLocal.value = e
            }
        }
    })()

    watch([NameKey, TypeKey], () => {
        DataLocal.value = FilterByName(DataClone.value, NameKey.value)
    })

    return {
        DataLocal,
        ErrorLocal,
        NameKey
    }
}