<template>
    <input type="search" placeholder="Input a pokemon name" class="Search" maxlength="25"/>
</template>
<script lang='ts' setup>

</script>
<styles lang='scss' scoped>
    .Search{
        width: 100%;
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
    }
</styles>