<template>
    <NavLayout>
        <div>
            <SelectInput>
                <template #name>Filter by Region:</template>
                <template #content>
                    <li
                    v-for="item in DataLocal"
                    class="Select-item"
                    >
                    {{ item.name }}
                    </li>
                </template>
            </SelectInput>
            <SelectInput>
                <template #name>Filter by Region:</template>
                <template #content>
                    <li
                    v-for="item in DataLocal"
                    class="Select-item"
                    >
                    {{ item.name }}
                    </li>
                </template>
            </SelectInput>
        </div>
    </NavLayout>
</template>
<script lang='ts' setup>
    import NavLayout from '../layout/Nav/NavLayout.vue';
    import SelectInput from '../components/Input/SelectInput.vue';

    import { useGetLocalData } from '../composables/useGetLocalData';

    const { d: DataLocal, a: ErrorLocal } = useGetLocalData('regions');
    const { DataLocal, ErrorLocal } = useGetLocalData('types');
</script>
<styles lang='scss' scoped>

</styles>