<template>
    <nav class="Nav">
        <div class="Nav-container">
            <slot name="slot_1"/>
            <slot name="slot_2"/>   
        </div>
    </nav>
</template>
<script lang='ts' setup>

</script>
<styles lang='scss' scoped>
    .Nav{
        border-bottom: solid 2px var(--input-active);
        padding: .3125rem;
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