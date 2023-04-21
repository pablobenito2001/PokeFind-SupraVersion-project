import PokemonInterface from "../interfaces/PokemonInterface";

export async function UnwrapData(elem: any): Promise<PokemonInterface[]>{
    // const res = [];
    // for (const i of elem) {
    //     const json = await fetch(i.url);
    //     const elem = await json.json()
    //     const pokemon = {
    //         name: elem.name,
    //         types: elem.types.map((elem: any) => elem.type.name),
    //         id: elem.id,
    //         image: elem.sprites.front_default,
    //         stats: elem.stats
    //     }
    //     res.push(pokemon)
    // }
    // return Promise.all(res);
    return Promise.all(elem.map(async (elem: any): Promise<PokemonInterface> => {
        let j = await(await fetch(elem.url)).json();
        return {
            name: j.name,
            types: j.types.map((elem: any) => elem.type.name),
            id: j.id,
            image: j.sprites.front_default,
            stats: j.stats
        }
    }))
}
