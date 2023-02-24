<script setup>
    import NavLayout from '../nav/NavLayout.vue';
    import Wrapper from './Wrapper.vue'
</script>
<template>
    <main class="Main">
        <NavLayout class="Main-nav"/>
        <Wrapper />
    </main>
</template>
<style scoped lang="scss">
    .Main{
        position: relative;
        &-nav{
            position: sticky;
            top: 0;
            z-index: 2;
        }
    }
</style>