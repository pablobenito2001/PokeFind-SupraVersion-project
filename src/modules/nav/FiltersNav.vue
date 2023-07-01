<template>
    <NavLayout class="Filter">
        <div class="Filter-search">
            <SearchInput 
            id="searchF"
            label=""
            placeholder="Pikachu"
            @emitSearch="emitName"/>
        </div>
        <div class="Filter-box">
            <Select 
            :options="types"
            label="Type:"
            @emitSelect="emitType"/>
            <Select 
            :options="regions" 
            label="Region:"
            @emitSelect="emitRegion"/>
        </div>
    </NavLayout>
</template>
<script lang='ts' setup>
    import { regions, types } from '../../consts/options'; 
    import NavLayout from '../../layout/Nav/NavLayout.vue';
    import Select from '../../components/Input/Select.vue';
    import SearchInput from '../../components/Input/SearchInput.vue';

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

    //emits
    const emit = defineEmits<{
        (e: 'update:name', value: string): void,
        (e: 'update:type', value: string): void,
        (e: 'update:region', value: string): void
    }>()

    function emitName(value: string){
        emit('update:name', value);
    }
    function emitRegion(value: string){
        emit('update:region', value);
    }
    function emitType(value: string){
        emit('update:type', value);
    }
</script>
<style lang='scss' scoped>
    .Filter{
        &-search{
            width: 100%;
            max-width: 28.125rem;
        }
        &-box{  
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .9375rem;
        }
        @media screen and (max-width: 1024px) {
            display: none;
        }
    }
</style>