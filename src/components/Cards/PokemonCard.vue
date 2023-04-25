<template>
    <div class="PokeCard">
        <div class="PokeCard-sprite">
            <img :src="props.image" :alt="`${ props.image }' sprite'`" :title="`${ props.name } sprite`" loading="lazy">
        </div>
        <div class="PokeCard-data">
            <div>
                <span class="PokeCard-dex">N°{{ props.id }}</span>
                <h3 class="PokeCard-name" :title="props.name">{{ props.name }}</h3>
            </div>
            <div class="PokeCard-typesBox">
                <img 
                v-for="(item, index) in props.types"
                :key="index"
                :src="types[item]" 
                :alt="`${ item } type`"
                :title="item"
                class="PokeCard-type"
                >
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
    interface Props{
        name: string;
        id: number;
        types: string[];
        image: string;
        stats: Object;
    }

    const props = defineProps<Props>();

    const types: Object = {
        grass: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048228/Pokemon-Types/grass_of6ivc.png',
        fairy: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048228/Pokemon-Types/fairy_s0umzi.png',
        ghost: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048228/Pokemon-Types/ghost_acmbqh.png',
        fire: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048228/Pokemon-Types/fire_unxz8o.png',
        flying: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048228/Pokemon-Types/flying_gl4xv5.png',
        dragon: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048228/Pokemon-Types/dragon_dkn0nq.png',
        dark: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048228/Pokemon-Types/dark_g8pr1m.png',
        psychic: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048227/Pokemon-Types/psychic_cwlpc5.png',
        electric: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048227/Pokemon-Types/electric_izhtnf.png',
        bug: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048227/Pokemon-Types/bug_xnoceu.png',
        water: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048227/Pokemon-Types/water_vw247n.png',
        steel: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048227/Pokemon-Types/steel_is6kay.png',
        normal: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048227/Pokemon-Types/normal_o15fbf.png',
        ground: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048227/Pokemon-Types/ground_tbmlgh.png',
        ice: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048227/Pokemon-Types/ice_jr3qsp.png',
        poison: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048227/Pokemon-Types/poison_ecusun.png',
        rock: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048227/Pokemon-Types/rock_byynbp.png',
        fighting: 'https://res.cloudinary.com/dxagsphno/image/upload/v1671048228/Pokemon-Types/fighting_crpadb.png'
    }
</script>
<styles lang='scss' scoped>
    .PokeCard{
        display: flex;
        background-color: transparent;
        border: solid 2px var(--input-active);
        padding: var(--padding-card);
        box-shadow: var(--box-shadow);
        border-radius: .3125rem;
        cursor: pointer;
        transition: box-shadow 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        &-sprite{
            min-width: 9.375rem;
            filter: grayscale(100%);
            transition: filter 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        &-data{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
        }
        &-dex{
            font-family: var(--secundary);
            color: var(--grey);
            font-size: .8em;
        }
        &-name{
            line-height: normal;
            text-transform: uppercase;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: clamp(1.8em, 2.5vw, 2.5em);
            font-weight: bold;
            color: var(--grey);
        }
        &-typesBox{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: .625rem;
        }
        &-type{
            max-width: 3.125rem;
        }
        &:hover .PokeCard-sprite{
            filter: unset;
        }
        &:hover{
            box-shadow: var(--box-shadow-hover);
        }
    }
</styles>