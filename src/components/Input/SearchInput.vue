<template>
    <div class="Search" :class="$attrs.class">
        <label :for="id" class="Seach-label"><slot /></label>
        <input type="search" :id="id" placeholder="Input a pokemon name" class="Search-input" maxlength="25" @input="emitValue($event)">
    </div>
</template>
<script lang='ts' setup>
    interface Props{
        id: string;
    }

    defineProps<Props>();

    const emit = defineEmits<{
        (e: 'update:modelValue', id: string): void,
    }>()

    function emitValue(e: Event){
        const value = e.target as HTMLInputElement;
        emit('update:modelValue', value.value);
    }
</script>
<styles lang='scss' scoped>
    .Search{
        min-width: 15.625rem;
        max-width: 28.125rem;
        width: 100%;
        font-family: var(--secundary);
        &-input{
            width: 100%;
            padding: .9375rem 1.25rem;
            border-radius: 6.25rem;
            background-color: var(--input-primary);
            transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                background-color: var(--input-hover);
            }
            &:focus{
                background-color: var(--input-active);
            }
        }
        &-label{
            display: none;
        }
    }
</styles>