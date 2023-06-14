<template>
    <WrapperLayout>
        <PokemonCard 
        v-for="item in props.data"
        :key="item.id"
        :name="item.name"
        :id="item.id"
        :image="item.image"
        :types="item.types"
        :stats="item.stats"
        />
    </WrapperLayout>
</template>
<script lang='ts' setup>
    import WrapperLayout from '../layout/Wrapper/WrapperLayout.vue';
    import PokemonCard from '../components/Cards/PokemonCard.vue';

    interface Props{
        data: {
            id: number,
            name: string,
            image: string,
            types: string[],
            stats: any
        }[]
    }

    const props = defineProps<Props>();
</script>
<style lang='scss' scoped>

</style>