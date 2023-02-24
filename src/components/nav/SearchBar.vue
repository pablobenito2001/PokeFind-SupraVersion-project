<script setup>

</script> 
<template>
        <div class="Search--container" :class="$attrs.class">
            <label for="search" class="Search-label"><slot></slot></label>
            <div class="Search-relative">
                <input type="search" maxlength="20" class="Search" placeholder="Search your favorite Pokemon." @input="(e) => store.changeName(e.target.value)">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="Search-glass"/>
            </div>
        </div>
</template>
<style scoped lang="scss">
    .Search{
        width: 100%;
        padding: 1.25rem .9375rem 1.25rem .9375rem;
        background-color: var(--ligth-color);
        outline: none;
        display: inline-block;
        color: var(--black-font);
        font-size: .9em;
        font-weight: bold;
        overflow: hidden;
        transition: padding 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        caret-color: black;
        &:focus{
            padding: 1.25rem .9375rem 1.25rem 2.5rem;
            + .Search-glass{
                display: inline-block;
                transform: translate(12px, 17px);
            }
        }
        &::placeholder{
            color: var(--grey-font);
        }
        &-relative{
            position: relative;
        }
        &-label{
            font-size: 0.8em;
            font-weight: bold;
        }
        &--container{
            max-width: 37.5rem;
            width: 100%;
        }
        &-glass{
            color: var(--grey-font);
            width: auto;
            position: absolute;
            font-size: 1.3em;
            top: 0;
            left: 0;
            display: none;
            transform: translate(-25px, 39px);
            transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
    }
</style>