<template>
    <div class="Main">
        <NavLayout class="Main-nav Main-hide">
            <SearchInput id="searcher" v-model.trim="NameKey"/>
            <div class="Main-select">
                <SelectTypeModule @select-type="(value: string) => TypeKey = value"/>
                <SelectRegionModule @select-region="(value: string) => RegionKey = value"/>
            </div>
        </NavLayout>
        <NavLayout class="Main-nav Main-show">
            <SearchMobile id="Smobile" v-model.trim="NameKey"/>
            <div class="Main-select">
                <SelectTypeMobileModule @select-type="(value: string) => TypeKey = value"/>
                <SelectRegionMobileModule @select-region="(value: string) => RegionKey = value"/>
            </div>
        </NavLayout>
        <main>
            <Loader v-if="DataLocal.length === 0"/>
            <template v-else-if="isError()">
                <ErrorShow :error="ErrorLocal"/>
            </template>
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
    import Loader from '../components/Loaders/Loader.vue';
    import ErrorShow from '../components/Loaders/ErrorShow.vue';
    import PokemonCard from '../components/Cards/PokemonCard.vue';
    import SearchMobile from '../components/Input/SearchMobile.vue';
    import SelectRegionMobileModule from './SelectRegionMobileModule.vue';
    import SelectTypeMobileModule from './SelectTypeMobileModule.vue';

    import { useGetPokemon } from '../composables/useGetPokemon';

    const { DataLocal, ErrorLocal, NameKey, TypeKey, RegionKey } = useGetPokemon();

    const isError = () => ErrorLocal.value instanceof Error;

</script>
<styles lang='scss' scoped>
    .Main{
        position: relative;
    }
    .Main-select{
        display: flex;
        gap: .625rem;
    }
    .Main-nav{
        position: sticky;
        top: 0;
    }
    .Main-hide{
        @media screen and (max-width: 860px){
            display: none;
        }
    }
    .Main-show{
        display: none;
        @media screen and (max-width: 860px){
            display: block;
        }
    }
</styles>