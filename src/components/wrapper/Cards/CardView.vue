<script setup>
    import { ref } from 'vue';
    import { useGetAsyncData } from '../../../composables/useGetAsyncData.js'
    import CardLoader from './CardLoader.vue';
    import Card from './Card.vue'

    const poke = ref(useGetAsyncData({}));

</script>
<template>
    <div class="Container">
        <template v-for="(item, index) in poke.data" :key="index">
            <Suspense>
                <template #default>
                    <Card :url="item.url"/>
                </template>
                <template #fallback>
                    <CardLoader />
                </template>
            </Suspense>
        </template>
    </div>
</template>
<style scoped lang="scss">
    button{
        color: black;
        padding: 10px;
        background-color: red;
        margin: 10px;
    }
    .Container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-auto-rows: 11.25rem;
        gap: var(--gap);
        max-width: 1400px;
        margin: auto;
        padding: var(--gap) .625rem;
    }
</style>