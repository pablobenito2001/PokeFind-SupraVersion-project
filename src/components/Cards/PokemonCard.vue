<template>
    <div class="PokeCard" @click="router.push({ path: `/${ props.id }` })">
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
                :src="typeMap.get(item)" 
                :alt="`${ item } type`"
                :title="item"
                class="PokeCard-type"
                >
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { router } from '../../router/router';
    import { typeMap } from '../../utils/TypeMap';

    interface Props{
        name: string;
        id: number;
        types: string[];
        image: string;
    }

    const props = defineProps<Props>();
</script>
<styles lang='scss' scoped>
    $box-shadow: rgb(218, 218, 218);

    .PokeCard{
        display: flex;
        background-color: transparent;
        border: solid 2px var(--alpha-grey);
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