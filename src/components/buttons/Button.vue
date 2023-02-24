<script setup>

</script>
<template>
    <button class="Button">
        <slot></slot>
    </button>
</template>
<style scoped lang="scss">
    .Button{
        max-width: 100%;
        background-color: var(--grey-color);
        padding: 15px;
        box-shadow: 1px 1px 15px 1px #8585852d;
        color: black;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>