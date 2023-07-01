<template>
    <div class="Main">
        <FiltersNav class="Main-nav" 
        v-model:name="NameKey" 
        v-model:type="TypeKey" 
        v-model:region="RegionKey"/>
        <FiltersNavMobile 
        v-model:name="NameKey"
        v-model:region="RegionKey"
        v-model:type="TypeKey"/>
        <main>
            <ErrorShow :error="errorLocal.message" v-if="errorLocal"/>
            <Loader v-else-if="!loading"/>
            <template v-else>
                <ErrorShow error="Pokemon not found" v-if="filterPokemon.length === 0"/>
                <WrapperCards :data="filterPokemon" v-else/>
            </template>
        </main>
    </div>
</template>
<script lang='ts' setup>
    import { ref, computed, watch } from 'vue';
    import FiltersNav from './nav/FiltersNav.vue';
    import FiltersNavMobile from './nav/FiltersNavMobile.vue';
    import Loader from '../components/Loaders/Loader.vue';
    import ErrorShow from '../components/Loaders/ErrorShow.vue';
    import WrapperCards from './WrapperCards.vue';
    import { useGetPokemonList } from '../composables/useGetPokemonList';
    import { PokemonViewCard } from '../interfaces/PokemonAPI';

    const NameKey = ref<string>('');
    const TypeKey = ref<string>('all');
    const RegionKey = ref<string>('kanto');
    const { fetchData, errorLocal, loading, getData } = useGetPokemonList(RegionKey.value);

    const filterPokemon = computed<PokemonViewCard[]>(() => {
        let finalReturn: PokemonViewCard[] = [...fetchData.value];
        if(TypeKey.value !== 'all') finalReturn = fetchData.value.filter((elem: PokemonViewCard) => elem.types.some((type: any) => type === TypeKey.value));
        finalReturn = finalReturn.filter((elem: PokemonViewCard) => elem.name.startsWith(NameKey.value));

        return finalReturn;
    });

    watch(() => RegionKey.value, 
    () => getData(RegionKey.value))
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