<template>
    <div class="Main">
        <FiltersNav class="Main-nav" 
        v-model:name="NameKey" 
        v-model:type="TypeKey" 
        v-model:region="RegionKey"/>
        <main>
            <ErrorShow :error="errorLocal.message" v-if="errorLocal"/>
            <template v-else>
                <Loader v-if="!loading"/>
                <ErrorShow error="Pokemon not found" v-else-if="filterPokemon.length === 0"/>
                <WrapperCards :data="filterPokemon" v-else/>
            </template>
        </main>
    </div>
</template>
<script lang='ts' setup>
    import { ref, computed, watch } from 'vue';
    import FiltersNav from './nav/FiltersNav.vue';
    import Loader from '../components/Loaders/Loader.vue';
    import ErrorShow from '../components/Loaders/ErrorShow.vue';
    import WrapperCards from './WrapperCards.vue';
    import Pokemon from '../interfaces/Pokemon';
    import { useGetPokemonList } from '../composables/useGetPokemonList';

    type PokemonCard = Omit<Pokemon, 'height' | 'weight' | 'stats' | 'abilities'>;

    const NameKey = ref<string>('');
    const TypeKey = ref<string>('all');
    const RegionKey = ref<string>('kanto');
    const { fetchData, errorLocal, loading, getData } = useGetPokemonList(RegionKey.value);

    const filterPokemon = computed<PokemonCard[]>(() => {
        let finalReturn: PokemonCard[] = [...fetchData.value];
        if(TypeKey.value !== 'all'){
            finalReturn = fetchData.value.filter((elem: PokemonCard) => elem.types.some((type: string) => type === TypeKey.value));
        }
        finalReturn = finalReturn.filter((elem: PokemonCard) => elem.name.startsWith(NameKey.value));

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