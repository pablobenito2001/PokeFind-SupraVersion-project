import type PokemonInterface from "../interfaces/PokemonInterface";

export const FilterByName = (elem: PokemonInterface[], keyName: string): PokemonInterface[] => {
    let res: PokemonInterface[] = [];

    res = elem.filter(elem => elem.name.startsWith(keyName))

    return res;
}