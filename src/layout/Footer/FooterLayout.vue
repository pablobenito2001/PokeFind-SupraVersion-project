<template>
    <footer class="Footer">
        <div class="Footer-grid">
            <slot />
        </div>
    </footer>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
    .Footer{
        min-width: 100%;
        padding: 2.8125rem .625rem;
        line-height: normal;
        border-top: solid 2px var(--grey);
        &-grid{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(16.25rem, 1fr));
            grid-auto-rows: auto;
            gap: var(--gap-element);
            max-width: 120rem;
            margin: auto;
        }
    }
</style>