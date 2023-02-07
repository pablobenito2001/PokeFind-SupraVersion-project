<script setup>
    import SearchBar from './SearchBar.vue';
</script>
<template>
    <nav class="Nav">
        <SearchBar :show="false" class="Nav-search"/>
        <div class="Nav-list">
            <select name="Type" id="type" class="Nav-select">
                Type of Pokemon
                <option value="Normal">Normal</option>
            </select>
        </div> 
    </nav>
</template>
<style scoped lang="scss">  
    .Nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1920px;
        padding: 5px;
        &-search{
            max-width: 300px;
        }
        &-select{
            padding: .3125rem .625rem;
            color: var(--black-font);
            font-weight: bold;
        }
    }
</style>