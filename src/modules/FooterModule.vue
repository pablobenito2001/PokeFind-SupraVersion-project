<template>
    <FooterLayout>
        <div class="Footer-name">
            <h2>Poke</h2>
            <h2>Find</h2>
        </div>
        <div>
            <h4 class="Footer-title">View the code:</h4>
            <ul class="Footer-text">
                <li>
                    <a href="https://github.com/pablobenito2001/PokeFind-SupraVersion" rel="noopener external" target="_blank">GitHub</a>
                </li>
            </ul>
        </div>
        <div>
            <h4 class="Footer-title">My Social Media:</h4>
            <ul>
                <li class="Footer-text">
                    <a href="https://github.com/pablobenito2001" rel="noopener external" target="_blank">GitHub</a>
                </li>
                <li class="Footer-text">
                    <a href="https://www.linkedin.com/in/pablo-benito-53610b222/" rel="noopener external" target="_blank">Linkedin</a>
                </li>
                <li class="Footer-text">
                    <a href="https://github.com/pablobenito2001" rel="noopener external" target="_blank">Twitter</a>
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
        color: var(--grey);
        &-title{
            font-size: 2em;
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
            transition: color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                color: var(--black);
            }
        }
    }
</style>