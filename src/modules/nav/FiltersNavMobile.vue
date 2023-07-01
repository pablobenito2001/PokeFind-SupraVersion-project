<template>
    <NavLayout class="NavMobile">
        <button class="NavMobile-menu" @click="() => open = !open">
            <svg xmlns="http://www.w3.org/2000/svg" class="NavMobile-svg" height="50" width="50" viewBox="0 96 960 960"><path d="M679 590 466 377l213-213 213 213-213 213Zm-559-72V217h301v301H120Zm418 418V635h301v301H538Zm-418 0V635h301v301H120Zm60-478h181V277H180v181Zm502 51 129-129-129-129-129 129 129 129Zm-84 367h181V695H598v181Zm-418 0h181V695H180v181Zm181-418Zm192-78ZM361 695Zm237 0Z"/></svg>
        </button>
        <Teleport to="body">
            <div class="NavMobile-modal" v-show="open">
                <h3 class="NavMobile-title">Filters</h3>
                <div class="NavMobile-filters">
                    <SearchInput 
                    label="By name: "
                    placeholder="Pikachu"
                    id="InputMobile"
                    @emitSearch="emitName"
                    />
                    <Select 
                    label="By Region:"
                    :options="regions"
                    @emitSelect="emitRegion"
                    />
                    <Select 
                    label="By Type:"
                    :options="types"
                    @emitSelect="emitType"
                    />
                    <button class="NavMobile-button NavMobile-button--close" @click="() => open = !open">Close</button>
                </div>
            </div>
        </Teleport>
    </NavLayout>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';
    import { regions, types } from '../../consts/options';
    import NavLayout from '../../layout/Nav/NavLayout.vue';
    import Select from '../../components/Input/Select.vue';
    import SearchInput from '../../components/Input/SearchInput.vue';

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
    });

    // modal control
    const open = ref<boolean>(false);
    // emits
    const emit = defineEmits<{
        (e: 'update:name', value: string): void,
        (e: 'update:type', value: string): void,
        (e: 'update:region', value: string): void
    }>()

    function emitName(value: string){
        emit('update:name', value);
    }
    function emitRegion(value: string){
        open.value = false;
        emit('update:region', value);
    }
    function emitType(value: string){
        open.value = false;
        emit('update:type', value);
    }
</script>
<style lang='scss' scoped>
    .NavMobile{
        &-svg{
            fill: var(--grey);
        }
        &-menu{
            cursor: pointer;
        }
        &-modal{
            position: fixed;
            top: 0;
            left: 0;
            z-index: 3;
            width: 100%;
            height: 100vh;
            background-color: var(--white);
            padding: 1.875rem;
        }
        &-title{
            font-size: clamp(4em, 5vw,5em);
            color: var(--grey);
            line-height: 100%;
            margin-bottom: 1.875rem;
        }
        &-filters{
            display: grid;
            gap: 1.25rem;
        }
        &-button{
            padding: .625rem .3125rem;
            font-size: 1.3em;
            color: var(--white);
            background-color: var(--green);
            cursor: pointer;
            border-radius: .3125rem;
            transition: filter .6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &--close{
                background-color: var(--red);
            }
            &:hover{
                filter: brightness(120%);
            }
        }
        @media screen and (min-width: 1024px) {
            display: none;
        }
    }
</style>