export default {
    fetchingLocal: async <T>(url: string): Promise<T> => {
        const json = await fetch(`/data/${url}.json`);
        const elem = await json.json() as Promise<T>;
        return elem
    },
    fetchPokemonRegion: (end: string): Promise<Response> => {
        return fetch(`https://pokeapi.co/api/v2/pokemon${ end }`);
    },
    fetchMultiplePokemon: <T>(pokemon: { name: string, url: string }[]): Promise<T[]> => {
        return Promise.all(pokemon.map((elem: { name: string, url: string }) => fetch(elem.url).then((elem: Response) => elem.json())))
    }
}