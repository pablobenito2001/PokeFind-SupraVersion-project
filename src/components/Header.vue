<script setup>

</script>
<template>
    <header class="Header">
        <div>
            <h1 class="Header-title">Poke<span class="colored--red">Find</span></h1>
            <h3 class="Header-subtitle"><span class="colored--green">Supra</span> Version</h3>
        </div>
    </header>
</template>
<style scoped lang="scss">
    @keyframes background {
        0% {
        background-position: 0% 50%; 
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
        min-height: 31.25rem;
        background: linear-gradient(90deg, #36B1C7 0%, #960B33 99.48%);
        padding: var(--gap);
        background-size: 200% 100%;
        animation: background 20s linear infinite;
        &-title{
            font-size: 4.6em;
            font-weight: bold;
            text-align: center;
        }
        &-subtitle{
            margin-top: 1.375rem;
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