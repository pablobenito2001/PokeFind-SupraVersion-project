import { ref, Ref } from "vue"; 
import { fetchSinglePokemon } from "../services/API";
import type { PokemonAPI, PokemonView, PokemonAPIType, PokemonAPIAbilitie, PokemonAPIStat } from "../interfaces/PokemonAPI";

export const useGetPokemon = (id: number | string) => {
    const pokemon: Ref<PokemonView> = ref<PokemonView | null>() as Ref<PokemonView>;
    const error: Ref<Error | null> = ref<Error | null>(null) as Ref<Error>;
    const loader: Ref<boolean> = ref<boolean>(false);

    const getPokemon = async (id: string | number) => {
        loader.value = false;
        try {
            const rawData: Awaited<PokemonAPI> = await fetchSinglePokemon(id);
            pokemon.value = {
                name: rawData.species.name,
                id: rawData.id,
                types: rawData.types.map((elem: PokemonAPIType) => elem.type.name),
                sprite: rawData.sprites.front_default,
                abilities: rawData.abilities.map((elem: PokemonAPIAbilitie) => {
                    return {
                        name: elem.ability.name,
                        is_hidden: elem.is_hidden
                    }
                }),
                height: rawData.height,
                weight: rawData.weight,
                stats: rawData.stats.map((elem: PokemonAPIStat) => {
                    return {
                        name: elem.stat.name,
                        base_stat: elem.base_stat
                    }
                })
            };
            loader.value = true;
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