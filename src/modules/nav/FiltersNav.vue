<template>
    <NavLayout>
        <SearchInput @input="emitName" :value="name" class="Filter-search Filter-hidden"/>
        <div class="Filter-box Filter-hidden">
            <select @change="emitRegion" :value="region">
                <option 
                v-for="item in regions"
                :key="item.id"
                :value="item.name"
                :selected="item.selected"
                >{{ item.name }}</option>
            </select>
            <select @change="emitType" :value="type">
                <option 
                v-for="item in types"
                :key="item.id"
                :value="item.name"
                :selected="item.selected"
                >{{ item.name }}</option>
            </select>
        </div>
        <button class="Filter-open" @click="() => open = !open">
            <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 96 960 960" width="45" class="Filter-svg"><path d="M400 816v-60h160v60H400ZM240 606v-60h480v60H240ZM120 396v-60h720v60H120Z"/></svg>
        </button>
        <Teleport to="body" v-if="open">
            <div class="Filter-modal">
                <h3 class="Filter-title">Filters</h3>
                <SearchInput @input="emitName" :value="name"/>
                <button class="Filter-button Filter-button--primary">Clear Name</button>
                <div class="Filter-box">
                    <select @change="emitRegion" :value="region">
                        <option 
                        v-for="item in regions"
                        :key="item.id"
                        :value="item.name"
                        :selected="item.selected"
                        >{{ item.name }}</option>
                    </select>
                    <select @change="emitType" :value="type">
                        <option 
                        v-for="item in types"
                        :key="item.id"
                        :value="item.name"
                        :selected="item.selected"
                        >{{ item.name }}</option>
                    </select>
                </div>
                <button class="Filter-button Filter-button--exit" @click="() => open = !open">Close Filters</button>
            </div>
        </Teleport>
    </NavLayout>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';

    import NavLayout from '../../layout/Nav/NavLayout.vue';
    import SearchInput from '../../components/Input/SearchInput.vue';

    import { useGetLocalData } from '../../composables/useGetLocalData';

    //selects
    const { DataLocal: regions, ErrorLocal: errorRegion } = useGetLocalData<{ id: number, name: string, selected: boolean }[]>('region');

    const { DataLocal: types, ErrorLocal: errorTypes } = useGetLocalData<{ id: number, name: string, selected: boolean }[]>('types');

    // props
    defineProps({
        name: {
            type: String
        },
        region: {
            type: String
        },
        type: {
            type: String
        }
    })

    //modal mobile nav
    const open = ref<boolean>(false);

    //emits
    const emit = defineEmits<{
        (e: 'update:name', value: string): void,
        (e: 'update:type', value: string): void,
        (e: 'update:region', value: string): void
    }>()

    function emitName(e: KeyboardEvent){
        const elem = e.target as HTMLInputElement;
        const nameSelect = elem.value.toLocaleLowerCase();
        emit('update:name', nameSelect);
    }
    function emitRegion(e: Event){
        const elem = e.target as HTMLSelectElement;
        emit('update:region', elem.value.toLocaleLowerCase());
    }
    function emitType(e: Event){
        const elem = e.target as HTMLSelectElement;
        emit('update:type', elem.value.toLocaleLowerCase());
    }
</script>
<styles lang='scss' scoped>
    .Filter{
        &-search{
            max-width: 450px;
        }
        &-select{
            width: 100%;
        }
        &-box{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .9375rem;
            @media screen and (max-width: 860px) {
                flex-direction: column;
                align-items: flex-start;
            }
        }
        &-open{
            display: none;
            cursor: pointer;
            @media screen and (max-width: 860px) {
                display: block;
            }
        }
        &-svg{
            fill: var(--grey);
        }
        &-modal{
            position: fixed;
            top: 0;
            left: 0;
            min-height: 100vh;
            width: 100%;
            z-index: 3;
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            gap: .9375rem;
            background-color: var(--white);
            @media screen and (min-width: 860px) {
                display: none;
            }
        }
        &-title{
            font-size: 3.3em;
            line-height: normal;
            color: var(--grey);
        }
        &-button{
            width: 100%;
            color: var(--white);
            font-weight: bold;
            padding: .9375rem;
            border-radius: .3125rem;
            cursor: pointer;
            &:active{
                filter: brightness(120%);
            }
            &--primary{
                background-color: var(--green);
            }
            &--exit{
                background-color: var(--red);
            }
        }
        &-label{
            color: var(--grey);
            font-weight: bold;
        }
        &-hidden{
            @media screen and (max-width: 860px) {
                display: none;
            }
        }
    }
</styles>