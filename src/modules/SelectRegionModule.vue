<template>
    <SelectInput>
        <template #name>Filter by Region:</template>
        <template #content>
            <li
            v-for="item in DataLocal"
            class="Select-item"
            @click="emitSelect($event)"
            >
            {{ item.name }}
            </li>
        </template>
    </SelectInput>
</template>
<script lang='ts' setup>
    import SelectInput from '../components/Input/SelectInput.vue';
    import { useGetLocalData } from '../composables/useGetLocalData';

    const { DataLocal, ErrorLocal } = useGetLocalData<{ id: number, name: string }[]>('region');

    const emit = defineEmits<{
        (e: 'selectRegion', value: string): void
    }>()

    function emitSelect(e: MouseEvent){
        const elem = e.target as HTMLLIElement;
        const nameSelect = elem.innerText.toLowerCase();
        emit('selectRegion', nameSelect);
    }
</script>
<styles lang='scss' scoped>

</styles>