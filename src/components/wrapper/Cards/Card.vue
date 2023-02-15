<script setup>
    import { ref } from 'vue';
    
    const poke = ref(null)
    const props = defineProps({
        url: String
    })

    const asyncFunc = async () =>{
        poke.value = await (await fetch(props.url)).json();
    }

    await asyncFunc();
</script>
<template>
    <div class="Card" :title="poke.name">
        <img :src="poke.sprites.front_default" :alt="poke.name" class="Card-image">
        <div class="Card-data">
            <div>
                <span class="Card-dex">N°{{ poke.id }}</span>
                <h3 class="Card-name">{{ poke.name }}</h3>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss"> 
    .Card{
        background-color: var(--grey-color);
        backdrop-filter: blur(15px);
        color: var(--grey-card-font);
        padding: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-shadow: 1px 1px 15px 1px #8585852d;
        cursor: pointer;
        &-data{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column;
            height: 100%;
        }
        &-image{
            max-width: 150px;
            height: 100%;
            filter: grayscale(100%);
            transition: filter 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
            object-fit: contain;
        }
        &-dex{
            font-weight: lighter;
            font-size: 1em;
        }
        &-name{
            margin-top: .3125rem;
            font-weight: bold;
            font-size: 1.6em;
            text-transform: uppercase;
        }
        &:hover .Card-image{
            filter: unset;
        }
    }
</style>