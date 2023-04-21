import type PokemonInterface from "../interfaces/PokemonInterface";

export const FilterByName = (elem: PokemonInterface[], keyName: string): PokemonInterface[] => {
    const final = [];
    if (keyName !== '') {
        for (let i = 0; i < elem.length; i++) {
            if(elem[i].name.indexOf(keyName) !== -1) {
                if (elem[i].name[0] === keyName[0]) {
                    final.push(elem[i])
                    continue;
                }
            }else{
                continue;
            }
        }
        return final;
    }
    return elem;
}