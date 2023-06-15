<template>
    <main class="PokemonLayout">
        <slot />
    </main>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .PokemonLayout{
        max-width: var(--max-width);
        background-color: transparent;
        margin: var(--margin) auto;
        padding: 0 var(--padding);
    }
</style>