<script setup>

</script>
<template>
        <div class="Search--container">
            <label for="search" class="Search-label">Gotta catch 'em all.</label>
            <input type="search" maxlength="20" class="Search" placeholder="Search your favorite Pokemon." id="search">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="Search-glass"/>
        </div>
</template>
<style scoped lang="scss">
    .Search{
        width: 100%;
        padding: 1.25rem .9375rem 1.25rem 2.5rem;
        background-color: var(--ligth-color);
        outline: none;
        display: inline-block;
        color: var(--black-font);
        font-size: .8em;
        font-weight: bold;
        &::placeholder{
            color: var(--grey-font);
        }
        &-label{
            font-size: 0.8em;
            font-weight: bold;
        }
        &--container{
            position: relative;
            max-width: 34.375rem;
            width: 100%;
        }
        &-glass{
            color: var(--grey-font);
            width: auto;
            position: absolute;
            font-size: 1.3em;
            top: 38px;
            left: 10px;
        }
    }
</style>