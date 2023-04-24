import PokemonInterface from "../interfaces/PokemonInterface";

export async function UnwrapData(elem: any): Promise<PokemonInterface[]>{
    return Promise.all(elem.map(async (elem: any): Promise<PokemonInterface> => {
        return fetch(elem.url)
        .then(json => json.json())
        .then(j => {
            return {
                name: j.name,
                types: j.types.map((elem: any) => elem.type.name),
                id: j.id,
                image: j.sprites.front_default,
                stats: j.stats
            }
        })
    }))
}
