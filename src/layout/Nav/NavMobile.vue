<template>
    <button class="NavMobile" @click="() => openModal()" >
        <img :src="FilterIcon" alt="Filter icon button">
    </button>
    <Teleport to="body">
        <div class="NavMobile-modal" v-if="open" @click.self="() => openModal()" @keypress.enter="() => open = false">
            <form class="NavMobile-grid">
                <slot />
                <div class="NavMobile-container">
                    <button @click="openModal()" class="NavMobile-button">Close</button>
                    <button @click.stop="" class="NavMobile-button">Aply Filters</button>
                </div>
            </form>
        </div>
    </Teleport>
</template>
<script lang="ts" setup> 
    import { ref } from 'vue';

    import FilterIcon from '../../assets/Filter_svg.svg';

    const open = ref<boolean>(false);

    function openModal() {
        open.value = !open.value;
        document.body.classList.toggle('noScroll')
    }
</script>
<style lang="scss" scoped>
    .NavMobile{
        display: none;
        max-width: 2.1875rem;
        &-modal{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.212);
            z-index: 4;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &-grid{
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            gap: var(--gap-element);
            border-radius: .3125rem;
            background-color: var(--white);
            width: 100%;
            max-width: 320px;
            padding: .9375rem;
        }
        &-container{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
        }
        &-button{
            padding: 5px 10px;
            border: solid 2px var(--input-active);
            border-radius: 5px;
            cursor: pointer;
        }
        @media screen and (max-width: 860px) {
            display: inline-block;
            // justify-self: flex-end;
        }
    }

    .noScroll{
        overflow-y: hidden;
    }
</style>