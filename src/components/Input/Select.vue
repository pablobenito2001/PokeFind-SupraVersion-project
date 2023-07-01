<template>
    <div class="Select">
        <span class="Select-label">{{ props.label }}</span>
        <select class="Select-select" @change="emitOption">
            <option value="all" class="Select-option">All</option>
            <option 
            v-for="(op, index) in props.options"
            :key="index"
            :value="op.value"
            class="Select-option">{{ op.name }}</option>
        </select>
    </div>
</template>
<script lang='ts' setup>
    interface Props{
        options: { name: string, value: string }[];
        label: string;
    }
    const props = defineProps<Props>();

    // emit
    const emit = defineEmits<{
        (e: 'emitSelect', value: string): void
    }>();
    function emitOption(e: Event){
        const value: string = (e.target as HTMLSelectElement).value;
        emit('emitSelect', value.toLocaleLowerCase().trim());
    }
</script> 
<style lang='scss' scoped>
    .Select{
        width: 100%;
        display: flex;
        align-items: center;
        gap: .625rem;
        &-select{
            cursor: pointer;
            width: 100%;
            padding: 5px 20px;
            font-family: var(--secundary);
            border: solid .125rem var(--alpha-grey);
            border-radius: 5px;
        }
        &-label{
            font-family: var(--secundary);
            line-height: 100%;
            font-size: 1.2em;
        }
        @media screen and (max-width: 64rem) {
            flex-direction: column;
            align-items: flex-start;
            gap: .625rem;
        }
    }
</style>