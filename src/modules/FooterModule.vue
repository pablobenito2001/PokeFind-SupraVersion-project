<template>
    <FooterLayout>
        <div class="Footer-name">
            <h2>Poke</h2>
            <h2>Find</h2>
        </div>
        <div class="Footer-code">
            <h4 class="Footer-title">Code on GitHub:</h4>
            <ul class="Footer-text">
                <li>
                    <a href="https://github.com/pablobenito2001/PokeFind-SupraVersion" rel="noopener external">GitHub</a>
                </li>
            </ul>
        </div>
    </FooterLayout>
</template>
<script lang="ts" setup>
    import FooterLayout from '../layout/Footer/FooterLayout.vue'
</script>
<style lang="scss" scoped>
    .Footer{
        color: var(--white);
        &-title{
            font-size: 1.5em;
            font-weight: bold;
        }
        &-name{
            line-height: 1em;
            font-size: clamp(4em, 5vw, 5em);
            font-weight: bold;
        }
        &-text{
            font-family: var(--secundary);
            font-size: 1.2em;
        }
    }
</style>