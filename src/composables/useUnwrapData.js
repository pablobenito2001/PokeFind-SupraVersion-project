import { Pokemon } from './usePokemonFormater.js';

export function useUnwrapData(elem){
    return Promise.all(elem.map(async elem => {
        let j = await(await fetch(elem.url)).json();
        return new Pokemon(j.name, j.types.map(elem => elem.type.name), j.id, j.sprites.front_default, j.stats)
    }))
}
