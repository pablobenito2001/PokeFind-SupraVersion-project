<script setup>
    import { useGetAsyncData } from '../composables/useGetAsyncData';

    const props = defineProps({
        name: String,
        url: URL
    })

    onMounted(() => {
        const { result, error } = useGetAsyncData(props.url)
    }),
</script>
<template>
    <div class="Card">
        
    </div>
</template>
<style scoped lang="scss">

</style>