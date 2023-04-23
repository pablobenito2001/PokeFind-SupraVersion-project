<template>
    <button class="NavMobile" @click="() => open = true">
        <img :src="FilterIcon" alt="Filter icon button">
    </button>
    <Teleport to="body">
        <div class="NavMobile-modal" v-if="open" @click.self="() => open = false" @keypress.enter="() => open = false">
            <div class="NavMobile-grid">
                <slot />
            </div>
        </div>
    </Teleport>
</template>
<script lang="ts" setup> 
    import { ref } from 'vue';

    import FilterIcon from '../../assets/Filter_svg.svg';

    const open = ref<boolean>(false);
</script>
<style lang="scss" scoped>
    .NavMobile{
        display: none;
        max-width: 2.1875rem;
        &-modal{
            position: absolute;
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
        @media screen and (max-width: 860px) {
            display: inline-block;
            justify-self: flex-end;
        }
    }
</style>