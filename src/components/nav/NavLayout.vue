<script setup>
    import { ref, provide } from 'vue'
    import SearchBar from './SearchBar.vue';
    import Select from './Select.vue';

    const search = ref(null)

    function log(e){
        console.log(e)
    }

    provide('search', search);
</script>
<template>
    <nav class="Nav" :class="$attrs.class">
        <div class="Nav--container">
            <SearchBar :show="false" class="Nav-search" @search="log"/>
        </div>
    </nav>
</template>
<style scoped lang="scss">  
    .Nav{
        padding: 5px 20px;
        border-bottom: solid .0625rem var(--dark-color);
        background-color: var(--ligth-color);
        &--container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 120rem;
            margin: auto;
        }
        &-search{
            max-width: 300px;
        }
        &-selectgroup{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--gap);
        }
    }
</style>