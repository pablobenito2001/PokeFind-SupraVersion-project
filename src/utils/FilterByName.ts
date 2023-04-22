import type PokemonInterface from "../interfaces/PokemonInterface";

export const FilterByName = (elem: PokemonInterface[], keyName: string): PokemonInterface[] => {
    let res: PokemonInterface[] = []

    res = elem.filter(elem => elem.name.startsWith(keyName)) /*When keyName is a empy string, filter return the original array*/

    if(res.length !== 0){
        return res
    }else{
        throw new Error('ips')
    }
}