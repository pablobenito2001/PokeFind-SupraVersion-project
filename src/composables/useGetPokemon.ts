import { ref, Ref } from "vue"; 
import API from "../services/API";
import type Pokemon from "../interfaces/Pokemon";

export const useGetPokemon = (id: number | string) => {
    const pokemon: Ref<Pokemon> = ref<Pokemon | null>() as Ref<Pokemon>;
    const error: Ref<Error | null> = ref<Error | null>(null) as Ref<Error>;
    const loader: Ref<boolean> = ref<boolean>(false);

    const getPokemon = async (id: string | number) => {
        try {
            loader.value = false;

            const rawData: Awaited<Response> = await API.fetchSinglePokemon(id);
            const data: Awaited<any> = await rawData.json();
            if(rawData.ok){
                const formater = {
                    name: data.species.name,
                    id: data.id,
                    types: data.types.map((elem: any) => elem.type.name),
                    image: data.sprites.front_default,
                    height: data.height,
                    weight: data.weight,
                    stats: data.stats.map((elem: any) => {
                        return {
                            name: elem.stat.name,
                            base_stat: elem.base_stat
                        }
                    }),
                    abilities: data.abilities.map((elem: any) => {
                        return {
                            name: elem.ability.name,
                            is_hidden: elem.is_hidden
                        }
                    })
                };
                pokemon.value = formater;
                loader.value = true;
            }else{
                throw new Error('Something went wrong' + rawData.status + ' ' + rawData.statusText);
            }
        } catch (e) {
            console.error(e)
            if(e instanceof Error) error.value = e
        }
    }

    getPokemon(id);

    return {
        pokemon, 
        error,
        loader,
        getPokemon
    }
}