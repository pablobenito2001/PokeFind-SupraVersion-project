<template>
    <SelectMobile>
        <template #name>Type:</template>
        <template #content>
            <li
            v-for="item in DataLocal"
            class="Select-item"
            @click="emitSelect($event)"
            >{{ item.name }}
        </li>
        </template>
    </SelectMobile>
</template>
<script lang='ts' setup>
    import SelectMobile from '../components/Input/SelectMobile.vue';
    import { useGetLocalData } from '../composables/useGetLocalData';

    const { DataLocal, ErrorLocal } = useGetLocalData<{ id: number, name: string }[]>('types');

    const emit = defineEmits<{
        (e: 'select-type', value: string): void
    }>()

    function emitSelect(e: MouseEvent){
        const elem = e.target as HTMLLIElement;
        const nameSelect = elem.innerText.toLowerCase();
        emit('select-type', nameSelect);
    }
</script>
<styles lang='scss' scoped>

</styles>