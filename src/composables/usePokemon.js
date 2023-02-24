import { storeToRefs } from 'pinia';

import { usePokemonStore } from '../stores/usePokemonStore.js'

export const usePokemon = () => {
    const store = usePokemonStore();
    const { pokemonArr, filterArr, name, type } = storeToRefs(store);

    const filterName = (nameKey) => {
        let final = [];
        for (let i = 0; i < pokemonArr.value.length; i++) {
            if(pokemonArr.value[i].name.indexOf(nameKey) !== -1) {
                if (pokemonArr.value[i].name[0] === nameKey[0]) {
                    final.push(pokemonArr.value[i])
                    continue;
                }
            }else{
                continue;
            }
        }
        if (final.length === 0) {
            
        }
        return final;
    }

    return {
        filterArr, name, type,
        filterName
    }
}