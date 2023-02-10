<script setup>
    import { useGetAsyncData } from '../../composables/useGetAsyncData';
    import CardLoader from './CardLoader.vue';
    import Card from './Card.vue'

    const { data, error } = useGetAsyncData('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50');
</script>
<template>
    <div class="Container">
        <template v-for="item in data">
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
    .Container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
        grid-auto-rows: 14.375rem;
        gap: var(--gap);
        max-width: 1400px;
        margin: auto;
        padding: var(--gap) .625rem;
    }
</style>