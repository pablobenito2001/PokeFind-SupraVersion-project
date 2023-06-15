<template>
    <nav class="Nav">
        <div class="Nav-max">
            <RouterLink to="/"><h1 class="Nav-title">Poke<span class="Nav-red">Find</span></h1></RouterLink>
        </div>
    </nav>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Nav{
        background-color: var(--white);
        &-max{
            max-width: 100rem;
            margin: auto;
            padding: .625rem var(--padding);
        }
        &-title{
            font-weight: 600;
            font-size: 1.875em;
            color: var(--grey);
        }
        &-red{
            color: var(--red);
        }
    }
</style>