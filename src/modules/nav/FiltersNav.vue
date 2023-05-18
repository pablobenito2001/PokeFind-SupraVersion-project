<template>
    <NavLayout>
        <input type="search" @input="emitName" placeholder="Input a pokemon name" :value="name" class="Filter-search Filter-hidden" maxlength="25"/>
        <div class="Filter-box Filter-hidden">
            <span class="Filter-label">Type: </span>
            <select @change="emitType" :value="type" class="Filter-select">
                <option 
                v-for="item in types"
                :key="item.id"
                :value="item.name"
                :selected="item.selected"
                class="Filter-option"
                >{{ item.name }}</option>
            </select>
            <span class="Filter-label">Region: </span>
            <select @change="emitRegion" :value="region" class="Filter-select">
                <option 
                v-for="item in regions"
                :key="item.id"
                :value="item.name"
                :selected="item.selected"
                class="Filter-option"
                >{{ item.name }}</option>
            </select>
        </div>
        <button class="Filter-open" @click="() => open = !open">
            <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 96 960 960" width="45" class="Filter-svg"><path d="M400 816v-60h160v60H400ZM240 606v-60h480v60H240ZM120 396v-60h720v60H120Z"/></svg>
        </button>
        <Teleport to="body" v-if="open">
            <div class="Filter-modal">
                <h3 class="Filter-title">Filters</h3>
                <div class="Filter-container">
                    <span class="Filter-label">By Name: </span>
                    <input type="search" 
                    @input="emitName" 
                    placeholder="Input a pokemon name" 
                    :value="name" 
                    class="Filter-search" 
                    maxlength="25"/>
                    <div class="Filter-container">
                        <span class="Filter-label">By Type: </span>
                        <select @change="emitType" :value="type" class="Filter-select">
                            <option 
                            v-for="item in types"
                            :key="item.id"
                            :value="item.name"
                            :selected="item.selected"
                            >{{ item.name }}</option>
                        </select>
                        <span class="Filter-label">By Region: </span>
                        <select @change="emitRegion" :value="region" class="Filter-select">
                            <option 
                            v-for="item in regions"
                            :key="item.id"
                            :value="item.name"
                            :selected="item.selected"
                            >{{ item.name }}</option>
                        </select>
                    </div>
                    <button class="Filter-button Filter-button--exit" @click="() => open = !open">Close</button>
                </div>
            </div>
        </Teleport>
    </NavLayout>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';

    import NavLayout from '../../layout/Nav/NavLayout.vue';

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

    function emitName(e: Event){
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
            width: 100%;
            max-width: 450px;
            padding: .9375rem 1.25rem;
            border-radius: 6.25rem;
            background-color: var(--input-primary);
            font-family: var(--secundary);
            transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                background-color: var(--input-hover);
            }
            &:focus{
                background-color: var(--input-active);
            }
            @media screen and (max-width: 860px){
                background-color: var(--input-hover);
                max-width: unset;
            }
        }
        &-box{  
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .9375rem;
        }
        &-select{
            width: 100%;
            border: solid .1875rem var(--input-hover);
            border-radius: .3125rem;
            padding: .3125rem 1.25rem;
            font-family: var(--secundary);
            text-align: center;
            cursor: pointer;
            transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                background-color: var(--input-hover);
            }
            @media screen and (max-width: 860px){
                background-color: var(--input-hover);
                text-align: left;
            }
        }
        &-option{
            text-transform: capitalize;
            background-color: var(--white);
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
            background-color: var(--white);
            @media screen and (min-width: 860px) {
                display: none;
            }
        }
        &-container{
            display: flex;
            flex-direction: column;
            gap: .9375rem;
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