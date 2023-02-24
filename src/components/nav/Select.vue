<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        get_data: String
    });
    const open = ref(false);
    const data = ref(null);

    async function getData(){
        try{
            const j = await(await fetch(props.get_data)).json();
            data.value = j;
        }catch(e){
            console.error(e)
        }
    }

    function emitSelect(e){
        
    }
    getData();
</script>
<template>
    <div class="Select">
        <button class="Select-button" @click="open = !open"><slot></slot><font-awesome-icon icon="fa-solid fa-angle-down" class="icon" :class="{'icon-active': open}"/></button>
        <ul class="Select-options" :class="{ 'show': open }">
            <li v-for="item in data" :key="item.id" class="Select-item" @click="emitSelect">{{ item.name }}</li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
    .Select{
        color: var(--grey-font);
        font-size: 0.93em;
        line-height: normal;
        position: relative;
        &-button{
            font-weight: bold;
            cursor: pointer;
            transition: color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                color: var(--black-font);
            }
        }
        &-options{
            position: absolute;
            padding: 3px 20px;
            overflow: hidden;
            width: 100%;
            opacity: 0; 
            height: 0;
            margin-top: 5px;
            background-color: white;
            box-shadow: inset 3px 3px 5px 0px #eeeeee, inset -3px -3px 5px 0px #eeeeee;
            border: solid 1px var(--dark-color);
            z-index: 2;
            transition: opacity 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        &-item{
            cursor: pointer;
            margin: 5px 0;
            transition: color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            width: 100%;
            &:hover{
                color: var(--black-font);
            }
        }
    }
    .show{
        height: auto;
        opacity: 1;
        transition: opacity 0.2s linear;
    }

    .icon{
        width: auto;
        transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        &-active{
            transform: rotate(180deg);
        }
    }
</style>