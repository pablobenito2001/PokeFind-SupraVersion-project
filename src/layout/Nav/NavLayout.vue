<template>
    <nav class="Nav" :class="$attrs.class">
        <div class="Nav-container">
            <slot />
        </div>
    </nav>
</template>
<script lang='ts' setup>

</script>
<styles lang='scss' scoped>
    .Nav{
        border-bottom: solid 2px var(--input-active);
        padding: .3125rem;
        background-color: var(--white);
        &-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: .9375rem;
            max-width: 120rem;
            margin: auto;
        }
    }
</styles>