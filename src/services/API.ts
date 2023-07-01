import { ResponseAPI } from "../interfaces/ResponseAPI";
import { PokemonAPI } from "../interfaces/PokemonAPI";

export function fetchPokemonRegion (end: string): Promise<ResponseAPI> {
    return fetch(`https://pokeapi.co/api/v2/pokemon${ end }`)
    .then((e: Response) => {
        if(e.ok && e.status === 200){
            return e.json();
        }else{
            throw new Error('Something went wrong ' + e.status + ' ' + e.statusText);
        }
    })
    .then((e: ResponseAPI) => e)
}

export function fetchSinglePokemon (id: string | number): Promise<PokemonAPI> {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`)
    .then((e: Response) => {
        if(e.ok && e.status === 200){
            return e.json();
        }else{
            throw new Error('Something went wrong ' + e.status + ' ' + e.statusText);
        }
    })
    .then((e: PokemonAPI) => e)
}

export function fetchMultiplePokemon (results: ResponseAPI): Promise<PokemonAPI[]> {
    const fetchList = results.results.map((elem: { name: string, url: string }) => {
        return fetchSinglePokemon(elem.name)
    });

    return Promise.all(fetchList);
}