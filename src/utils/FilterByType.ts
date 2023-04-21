import type PokemonInterface from "../interfaces/PokemonInterface";

export const FilterByType = (elem: PokemonInterface[], keyType: string): PokemonInterface[] => {
    if(keyType !== 'all'){
        return elem.filter((fil) =>  fil.types.some((some) => some === keyType))
    }else{
        return elem;
    }
}