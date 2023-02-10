<script setup>

</script>
<template>
    <div class="Loader">
        
    </div>
</template>
<style scoped lang="scss">
    @keyframes load {
        to {
            background-position-x: -20%;
        }
    }
    .Loader{
        background-color: var(--grey-color);
        backdrop-filter: blur(15px);
        background-image: linear-gradient(100deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, .5) 50%,rgba(255, 255, 255, 0) 60%);
        padding: var(--gap);
        background-size: 200% 100%;
        background-position-x: 180%;
        animation: 1s load ease-in-out infinite;
        }   
</style>