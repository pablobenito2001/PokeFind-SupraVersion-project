<script setup>
    import CardView from './Cards/CardView.vue';
</script>
<template>
    <main class="Wrapper">
        <CardView />
    </main>
</template>
<style scoped lang="scss">
    .Wrapper{
        position: relative;
        &-nav{
            z-index: 1;
            position: sticky;
            top: 0;
        }
    }
</style>