<script setup>
    import NavLayout from '../nav/NavLayout.vue';
    import Wrapper from './Wrapper.vue'
</script>
<template>
    <main class="Main">
        <NavLayout class="Main-nav"/>
        <!-- <Suspense>
            <Wrapper />
            <template #fallback>
                ...loading
            </template>
        </Suspense> -->
        <Wrapper />
    </main>
</template>
<style scoped lang="scss">
    .Main{
        position: relative;
        &-nav{
            position: sticky;
            top: 0;
            z-index: 1;
        }
    }
</style>