export interface PokemonAPI {
    abilities: PokemonAPIAbilitie[],
    base_experience: number,
    forms: PokemonAPINameUrl[],
    game_indices: PokemonAPIGameIndice[],
    height: number,
    held_items: PokemonAPIHeldItem[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: PokemonAPIMove[],
    name: string,
    order: number,
    past_types: [],
    species: PokemonAPINameUrl,
    sprites: PokemonAPISprites,
    stats: PokemonAPIStat[],
    types: PokemonAPIType[];
    weight: number;
}

export interface PokemonAPIAbilitie{
    ability: PokemonAPINameUrl,
    is_hidden: boolean,
    slot: number
}

export interface PokemonAPIGameIndice{
    game_index: number;
    version: PokemonAPINameUrl;
}

export interface PokemonAPINameUrl{
    name: string;
    url: string;
}

export interface PokemonAPIHeldItem{
    item: PokemonAPINameUrl;
    version_details: PokemonAPIItemGameDetail[];
  }

export interface PokemonAPIItemGameDetail{
    rarity: number;
    version: PokemonAPINameUrl;
}

export interface PokemonAPIMove{
    move: PokemonAPINameUrl;
    version_group_details: {
        level_learned_at: number,
        move_learn_method: PokemonAPINameUrl,
        version_group: PokemonAPINameUrl
    }[];
}

export interface PokemonAPISprites{
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface PokemonAPIStat{
    base_stat: number,
    effort: number,
    stat: PokemonAPINameUrl
}

export interface PokemonAPIType{
    slot: number,
    type: PokemonAPINameUrl
}

export interface PokemonView{
    id: number;
    name: string;
    types: string[];
    sprite: string;
    abilities:  { name: string, is_hidden: boolean }[];
    height: number;
    weight: number;
    stats: { name: string, base_stat: number }[];
}

export interface PokemonViewCard{
    id: number;
    name: string;
    types: string[];
    sprite: string;
}