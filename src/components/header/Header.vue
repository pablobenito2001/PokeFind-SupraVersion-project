<script setup>
    import SearchBar from '../nav/SearchBar.vue';
</script>
<template>
    <header class="Header" v-once>
        <div class="Header-container">
            <h1 class="Header-title">Poke<span class="colored--red">Find</span></h1>
            <h3 class="Header-subtitle"><span class="colored--green">Supra</span> Version</h3>
        </div>
            <SearchBar>Gotta catch 'em all.</SearchBar>
    </header>
</template>
<style scoped lang="scss">
    @keyframes background {
        0% {
        background-position: 0% 50%; 
        }
        25%{
            background-position: 50% 100%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    .Header{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 3.125rem;
        min-height: 400px;
        background: linear-gradient(90deg, #36B1C7 0%, #960B33 99.48%);
        padding: var(--gap);
        background-size: 200% 100%;
        animation: background 15s linear infinite alternate;
        &-container{
            max-width: 37.5rem;
        }
        &-title{
            font-size: clamp(4em, 10vw, 5em);
            font-weight: bold;
            text-align: center;
        }
        &-subtitle{
            margin-top: 1.5625rem;
            font-size: 1.8em;
            font-weight: bolder;
            text-align: center;
        }
    }

    .colored--red{
        color: #DA3564;
    }
    .colored--green{
        color: #41B883;
    }
</style>    