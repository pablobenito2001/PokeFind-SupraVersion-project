<template>
    <div class="Search">
        <label :for="props.id" class="Search-label">{{ props.label }}</label>
        <input 
        type="search" 
        :id="props.id" 
        :placeholder="props.placeholder" 
        class="Search-search" 
        maxlength="25"
        @input="emitSearch"/>
    </div>
</template>
<script lang='ts' setup>
    interface Props{
        placeholder: string;
        label: string;
        id: string;
    }

    const props = defineProps<Props>()

    // emit
    const emit = defineEmits<{
        (e: 'emitSearch', value: string):void
    }>();

    function emitSearch(e: Event){
        const value = (e.target as HTMLInputElement).value;
        emit('emitSearch', value.toLocaleLowerCase().trim());
    }
</script>
<styles lang='scss' scoped>
    .Search{
        width: 100%;
        display: flex;
        align-items: center;
        &-search{
            width: 100%;
            padding: .9375rem 1.25rem;
            border-radius: 6.25rem;
            background-color: var(--alpha-grey);
            font-family: var(--secundary);
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
</styles>