<template>
    <header class="HeaderPokemon">
        <div>
            <img :src="props.sprite" :alt="`${ props.name } sprite`" class="HeaderPokemon-sprite">
        </div>
        <div>
            <span class="HeaderPokemon-text">Nro°{{ props.id }}</span>
            <h2 class="HeaderPokemon-text HeaderPokemon-name">{{ props.name }}</h2>
            <div>
                <div> 
                    <img 
                    v-for="(item, index) in props.types"
                    :key="index"
                    :src="typeMap.get(item)" 
                    :alt="item"
                    :title="item"
                    class="HeaderPokemon-type">
                </div>
                <div class="HeaderPokemon-info">
                    <span class="HeaderPokemon-text HeaderPokemon-subtitle">Abilities:</span>
                    <div class="HeaderPokemon-grid">
                        <div
                        v-for="(item, index) in props.abilities"
                        :key="index"
                        class="HeaderPokemon-abilitie HeaderPokemon-text"
                        :class="{ 'HeaderPokemon-abilitie--hidden': item.is_hidden }"
                        >{{ item.name }}</div>
                    </div>
                </div>
                <div class="HeaderPokemon-info">
                    <span class="HeaderPokemon-text HeaderPokemon-subtitle">Weight:</span>
                    <div class="HeaderPokemon-text">{{ props.weight }}kg</div>
                </div>
                <div class="HeaderPokemon-info">
                    <span class="HeaderPokemon-text HeaderPokemon-subtitle">Height:</span>
                    <div class="HeaderPokemon-text">{{ props.height }}m</div>
                </div>
            </div>
        </div>
    </header>
</template>
<script lang='ts' setup>
    import { typeMap } from '../../utils/TypeMap';

    interface Props{
        name: string;
        id: number;
        types: string[];
        sprite: string;
        abilities: { name: string, is_hidden: boolean }[];
        height: number;
        weight: number;
    }

    const props = defineProps<Props>()
</script>
<style lang='scss' scoped>
    .HeaderPokemon{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(31.25rem, 100%), 1fr));
        grid-auto-rows: auto;
        gap: .9375rem;
        &-text{
            line-height: 100%;
            font-weight: 600;
            color: var(--grey);
            text-transform: uppercase;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &-name{
            font-size: clamp(3em, 5.375vw,5.375em); 
        }
        &-sprite{
            object-fit: contain;
            max-height: 350px;
        }
        &-subtitle{
            text-transform: capitalize;
            font-size: 1.375em;
        }
        &-type{
            max-width: 60px;
            display: inline-block;
            margin: 0 10px 0 0;
        }
        &-abilitie{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-family: var(--secundary);
            padding: .5rem .625rem;
            border: solid 2px var(--grey);
            border-radius: .3125rem;
            text-transform: capitalize;
            &--hidden{
                border: solid 2px var(--white);
                background: linear-gradient(90deg, var(--green) 1.37%, var(--red) 96.39%);
                color: var(--white);
            }
        }
        &-info{
            margin: .625rem 0;
        }
        &-grid{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            grid-auto-rows: auto;
            gap: .625rem;
        }
    }
</style>