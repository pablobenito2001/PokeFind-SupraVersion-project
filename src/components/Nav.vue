<script setup>
    import SearchBar from './SearchBar.vue';
    import Select from './Select.vue';
</script>
<template>
    <nav class="Nav">
        <div class="Nav--container">
            <SearchBar :show="false" class="Nav-search"/>
            <div class="Nav-selectgroup">
                <Select> 
                    <template v-slot:name>
                        Select Type
                    </template>
                    <template v-slot:options>
                        <li class="Select-item">Normal</li>
                        <li class="Select-item">Psychic</li>
                        <li class="Select-item">Rock</li>
                        <li class="Select-item">Grass</li>
                        <li class="Select-item">Ground</li>
                        <li class="Select-item">Steel</li>
                        <li class="Select-item">Electric</li>
                        <li class="Select-item">Water</li>
                        <li class="Select-item">Fire</li>
                        <li class="Select-item">Fairy</li>
                        <li class="Select-item">Dark</li>
                        <li class="Select-item">Poison</li>
                        <li class="Select-item">Flying</li>
                        <li class="Select-item">Ghost</li>
                        <li class="Select-item">Dragon</li>
                        <li class="Select-item">Figthing</li>
                        <li class="Select-item">Bug</li>
                        <li class="Select-item">Ice</li>
                    </template>
                </Select>
                <Select>
                    <template v-slot:name>
                        Select Region
                    </template>
                    <template v-slot:options>
                        <li class="Select-item">Kanto</li>
                        <li class="Select-item">Jotho</li>
                        <li class="Select-item">Hoen</li>
                        <li class="Select-item">Sinnoh</li>
                        <li class="Select-item">Unova</li>
                        <li class="Select-item">Kalos</li>
                        <li class="Select-item">Alola</li>
                        <li class="Select-item">Galar</li>
                    </template>
                </Select>
            </div>
        </div>
    </nav>
</template>
<style scoped lang="scss">  
    .Nav{
        padding: 5px 20px;
        border-bottom: solid .0625rem var(--dark-color);
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