<template>
    <div class="Select" :class="$attrs.class">
        <button class="Select-button" @click="() => open = !open"><slot name="name"/></button>
        <transition name="slide-fade">
            <div class="Select-container" v-if="open">
                <ul class="Select-options">
                    <slot name="content"/>
                </ul>
            </div>
        </transition>
        <Teleport to="body">
            <div class="Select-window" v-if="open" @click="() => open = false"></div>
        </Teleport>
    </div>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';

    const open = ref<boolean>(false);
</script>
<styles lang='scss' scoped>
    .Select{
        font-family: var(--secundary);
        line-height: normal;
        position: relative;
        z-index: 2;
        &-button{
            color: var(--black);
            padding: .3125rem 1.25rem;
            border-radius: .3125rem;
            cursor: pointer;
            border: solid .125rem var(--input-active);
            transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                background-color: var(--input-primary);
            }
        }
        &-container{
            position: absolute;
            overflow: hidden;
            margin: .3125rem 0 0 0;
            background-color: var(--white);
            border-radius: .3125rem;
            box-shadow: var(--box-shadow);
            border: solid .0625rem var(--input-active);
        }
        &-options{
            padding: .3125rem 1.25rem;
            & > li{
                cursor: pointer;
                color: var(--grey);
                transition: color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
                text-transform: capitalize;
                &:hover{
                    color: var(--black);
                }
            }
        }
        &-window{
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100%;
            cursor: pointer;
        }
    }

    .slide-fade-enter-active {
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(-1.25rem);
    opacity: 0;
    }
</styles>