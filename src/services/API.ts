import { UnwrapData } from '../utils/UnwrapData'

export default {
    fetchingLocal: async <T>(url: string): Promise<T> => {
        const json = await fetch(`/data/${url}.json`)
        const elem = await (json.json() as Promise<T>)
        return elem
    },
    fetchPokemonRegion: async <T>(end: string): Promise<T> => {
        return fetch(`https://pokeapi.co/api/v2/pokemon${ end }`)
        .then(json => json.json())
        .then(elem => {
            const poke = UnwrapData(elem.results) as unknown;
            return poke as T;
        })
        .catch(e => {
            throw new Error(e)
        })
    }
}