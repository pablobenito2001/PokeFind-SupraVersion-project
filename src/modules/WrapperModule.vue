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
                <WrapperCards :data="filterPokemon" v-else/>
            </template>
        </main>
    </div>
</template>
<script lang='ts' setup>
    import { ref, computed } from 'vue';
    import FiltersNav from './nav/FiltersNav.vue';
    import Loader from '../components/Loaders/Loader.vue';
    import ErrorShow from '../components/Loaders/ErrorShow.vue';
    import WrapperCards from './WrapperCards.vue';
    import PokemonInterface from '../interfaces/PokemonInterface';
    import { useGetPokemon } from '../composables/useGetPokemon';

    const NameKey = ref<string>('');
    const TypeKey = ref<string>('all');
    const RegionKey = ref<string>('kanto');

    const { fetchData, errorLocal, loading } = useGetPokemon(RegionKey.value);

    const filterPokemon = computed<PokemonInterface[]>(() => {
        const filterType = fetchData.value.filter((elem: PokemonInterface) => elem.types.some((type: string) => {
            if(TypeKey.value !== 'all') return type === TypeKey.value
            else return -1
        }));
        const filterName = filterType.filter((elem: PokemonInterface) => elem.name.startsWith(NameKey.value));

        return filterName;
    })
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