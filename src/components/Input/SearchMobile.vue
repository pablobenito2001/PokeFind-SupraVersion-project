<template>
    <div class="SearchM">
        <button class="SearchM-button" @click="openModal"><img :src="SearchIcon" alt="Search icon button"></button>
        <Teleport to="body">
            <div class="SearchM-container" v-if="open" @click.self="openModal">
                <div class="SearchM-searcher">
                    <label :for="props.id"></label>
                    <input type="search" name="search" :id="props.id" placeholder="Input a pokemon name." class="SearchM-inputS" @keypress.enter="emitValue($event)">
                </div>
            </div>
        </Teleport>
    </div>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';
    import SearchIcon from '../../assets/Search_svg.svg'

    interface Props{
        id: string;
    }

    const props = defineProps<Props>()
    const open = ref<boolean>(false);
    const emit = defineEmits<{
        (e: 'update:modelValue', id: string): void,
    }>()

    function emitValue(e: Event){
        openModal()
        const value = e.target as HTMLInputElement;
        emit('update:modelValue', value.value);
    }

    function openModal(){
        document.body.classList.toggle('window');
        open.value = !open.value;
    }
</script>
<styles lang='scss' scoped>
    .SearchM{
        &-button{
            max-width: 2.5rem;
        }
        &-container{
            z-index: 4;
            background-color: var(--black-alpha);
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100vh;
            padding: .9375rem;
        }
        &-searcher{
            margin: auto;
            width: 100%;
        }
        &-inputS{
            color: var(--white);
            padding: 15px;
            border-radius: 25px;
            background-color: var(--black-alpha);
            width: 100%;
        }
    }

    .window{
        overflow-y: hidden;
    }
</styles>