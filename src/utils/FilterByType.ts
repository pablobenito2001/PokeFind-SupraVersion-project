import type PokemonInterface from "../interfaces/PokemonInterface";

export const FilterByType = (elem: PokemonInterface[], keyType: string): PokemonInterface[] => {
    if(keyType !== 'all'){
        const res = elem.filter((fil) =>  fil.types.some((some) => some === keyType))
        if(res.length !== 0) return res
        else throw new Error('Pokemon not Found.')
    }else{
        return elem;
    }
}