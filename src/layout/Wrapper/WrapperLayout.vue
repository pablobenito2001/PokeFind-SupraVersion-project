<template>
    <div class="Wrapper">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<styles lang='scss' scoped>
    .Wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(22.5rem, 1fr));
        grid-auto-rows: 11.25rem;
        gap: var(--gap-cards);
        max-width: var(--max-width);
        padding: 0 .625rem;
        margin: var(--margin) auto;
        min-height: calc(100vh - 25rem);
    }
</styles>