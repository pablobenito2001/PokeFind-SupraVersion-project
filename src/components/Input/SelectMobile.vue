<template>
    <div class="Select" :class="$attrs.class">
        <button class="Select-button" @click="openModal"><slot name="name"/></button>
        <Teleport to="body">
            <div class="SelectM-window" v-if="open" @click="openModal">
                <ul class="SelectM-list">
                    <slot name="content"/>
                </ul>
            </div>
        </Teleport>
    </div>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';

    const open = ref<boolean>(false);

    function openModal(){
        document.body.classList.toggle('window');
        open.value = !open.value
    }
</script>
<styles lang='scss' scoped>
    .SelectM{
        &-window{
            z-index: 4;
            background-color: var(--black-alpha);
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            min-height: 100vh;
            padding: .9375rem;
        }
        &-list{
            color: var(--white);
            font-size: 1.3em;
            line-height: normal;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            grid-auto-rows: auto;
            gap: .625rem;
            & > li{
                font-family: var(--secundary);
                background-color: var(--black-alpha);
                border-radius: .3125rem;
                text-align: center;
                cursor: pointer;
                padding: .625rem;
                text-transform: capitalize;
            }
        }
    }

    .window{
        overflow-y: hidden;
    }
</styles>