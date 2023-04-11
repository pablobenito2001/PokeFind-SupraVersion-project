import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { usePokemonStore } from '../stores/usePokemonStore.js';
import { FilterByName } from '../utils/FilterByName.js';
import { FilterByType } from '../utils/FilterByType.js';

const resultArray = ref(null);

export const usePokemonFilter = () => {
    const store = usePokemonStore();
    const { pokemonArr, name, type } = storeToRefs(store);

    store.getPokemonData('kalos');

    function filter(){
        resultArray.value = FilterByType(pokemonArr.value, type.value);
        resultArray.value = FilterByName(resultArray.value, name.value)
    }

    function changeName(value){
        store.setName(value);
    }

    function changeType(value){
        store.setType(value)
    }
    
    watch([name, type], filter)

    return {
        resultArray,
        changeName,
        changeType
    }
}