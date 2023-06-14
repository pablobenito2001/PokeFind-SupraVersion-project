<template>
    <div class="Error">
        <div class="Error-image">
            <img :src="icon" alt="something went wrong.">
        </div>
        <div class="Error-message">
            <span>{{ error }}</span>
        </div>  
    </div>
</template>
<script lang="ts" setup>
    import icon from '../../assets/Loader.svg';
    
    interface Props{
        error: Error | null | string;
    }

    const props = defineProps<Props>();
</script>
<style lang="scss" scoped>
    .Error{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: calc(100vh - 400px);
        &-image{
            max-width: 300px;
            height: auto;
        }
        &-message{
            font-size: 2em;
        }
    }
</style>