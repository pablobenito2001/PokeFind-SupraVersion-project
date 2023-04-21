<template>
    <SelectInput>
        <template #name>Filter by Type:</template>
        <template #content>
            <li
            v-for="item in DataLocal"
            class="Select-item"
            >{{ item.name }}</li>
        </template>
    </SelectInput>
</template>
<script lang='ts' setup>
    import SelectInput from '../components/Input/SelectInput.vue';
    import { useGetLocalData } from '../composables/useGetLocalData';

    const { DataLocal, ErrorLocal } = useGetLocalData<{ id: number, name: string }[]>('types');
</script>
<styles lang='scss' scoped>

</styles>