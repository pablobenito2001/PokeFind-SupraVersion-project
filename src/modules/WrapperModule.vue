<template>
    <div class="Main">
        <NavLayout>
            <template #slot_1>
                <SearchInput id="searcher" v-model="NameKey"/>
            </template>
            <template #slot_2>
               <div class="Main-select">
                    <SelectTypeModule />
                    <SelectRegionModule />
               </div>
            </template>
        </NavLayout>
        <main>
            <Loader v-if="DataLocal.length === 0"/>
            <template v-else>
                <WrapperLayout>
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
    import NavLayout from '../layout/Nav/NavLayout.vue';    
    import SearchInput from '../components/Input/SearchInput.vue';
    import SelectTypeModule from './SelectTypeModule.vue';
    import SelectRegionModule from './SelectRegionModule.vue';
    import WrapperLayout from '../layout/Wrapper/WrapperLayout.vue';
    import Loader from '../components/Loaders/Loader.vue'
    import PokemonCard from '../components/Cards/PokemonCard.vue';

    import { useGetPokemon } from '../composables/useGetPokemon';

    const { DataLocal, ErrorLocal, NameKey } = useGetPokemon();
</script>
<styles lang='scss' scoped>
    .Main-select{
        display: flex;
        gap: .625rem;
    }
</styles>