<template>
    <HeaderLayout>
        <template #caption>
            <h3>Find your favorite pokemon.</h3>
        </template>
    </HeaderLayout>
    <WrapperModule />
    <FooterModule />
</template>
<script lang='ts' setup>
    import HeaderLayout from '../layout/Header/HeaderLayout.vue';
    import WrapperModule from '../modules/WrapperModule.vue';
    import FooterModule from '../modules/FooterModule.vue';
</script>
<styles lang='scss' scoped>

</styles>