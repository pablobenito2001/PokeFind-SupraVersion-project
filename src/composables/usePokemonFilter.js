import { ref, watch } from 'vue';
import { FilterByName } from '../utils/FilterByName.js';
import { FilterByType } from '../utils/FilterByType.js';
import { useUnwrapData } from '../utils/useUnwrapData.js';
import RegionAPI from '../services/RegionAPI.js'

const regions = {
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

const resultArray = ref(null);
const error = ref(null);
const filters = {
    name: ref(''),
    type: ref('all'),
    region: ref('kanto')
}

export const usePokemonFilter = function () {
    function changeRegion(value){
        filters.region.value = value;
    }
    function changeName(value){
        filters.name.value = value;
    }
    function changeType(value){
        filters.type.value = value;
    }

    async function getDataPokemon(){
        try{
            let result = await RegionAPI.getRegion(regions[filters.region.value]);
            result = await useUnwrapData(result.data.results);
            resultArray.value = result;
        }catch(e){
            error.value = e;
            return;
        }
    }

    return {
        getDataPokemon,
        resultArray
    }
}