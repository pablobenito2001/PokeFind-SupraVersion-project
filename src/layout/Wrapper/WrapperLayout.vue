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
        grid-template-columns: repeat(auto-fill, minmax(21.875rem, 1fr));
        grid-auto-rows: auto;
        gap: var(--gap-cards);
        max-width: 87.5rem;
        margin: var(--gap-element) auto;
    }
</styles>