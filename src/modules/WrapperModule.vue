<template>
    <div class="Main">
        <FiltersNav class="Main-nav" 
        v-model:name="NameKey" 
        v-model:type="TypeKey" 
        v-model:region="RegionKey"/>
        <main>
            <ErrorShow :error="ErrorLocal" v-if="isError()"/>
            <template v-else>
                <Loader v-if="DataLocal.length === 0"/>
                <WrapperLayout v-else>
                    <PokemonCard 
                    v-for="item in DataLocal"
                    :key="item.id"
                    :name="item.name"
                    :id="item.id"
                    :image="item.image"
                    :stats="item.stats"
                    :types="item.types"
                    />
                </WrapperLayout>
            </template>
        </main>
    </div>
</template>
<script lang='ts' setup>
    import FiltersNav from './nav/FiltersNav.vue';
    import WrapperLayout from '../layout/Wrapper/WrapperLayout.vue';
    import Loader from '../components/Loaders/Loader.vue';
    import ErrorShow from '../components/Loaders/ErrorShow.vue';
    import PokemonCard from '../components/Cards/PokemonCard.vue';

    import { useGetPokemon } from '../composables/useGetPokemon';

    const { DataLocal, ErrorLocal, NameKey, TypeKey, RegionKey } = useGetPokemon();

    const isError = () => ErrorLocal.value instanceof Error;
    
</script>
<styles lang='scss' scoped>
    .Main{
        position: relative;
        &-nav{
            position: sticky;
            z-index: 2;
            top: 0;
        }
    }
</styles>