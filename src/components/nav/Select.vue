<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        get_data: String,
        function_do: Function
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
    getData()
</script>
<template>
    <div class="Select">
        <button class="Select-button" @click="open = !open"><slot></slot><font-awesome-icon icon="fa-solid fa-angle-down" class="icon" :class="{'icon-active': open}"/></button>
        <div class="Select-container" v-if="open">
            <ul class="Select-options">
                <li v-for="item in data" :key="item.id" class="Select-item" @click="function_do($event.target.innerText.toLowerCase())">{{ item.name }}</li>
            </ul>
        </div>
        <Teleport to="body">
            <div class="Select-window" v-if="open" @click.stop="() => open = false"></div>
        </Teleport>
    </div>
</template>
<style scoped lang="scss">
    .Select{
        color: var(--grey-font);
        font-size: 0.93em;
        line-height: normal;
        position: relative;
        &-button{
            color: var(--grey-font);
            font-weight: bold;
            cursor: pointer;
            transition: color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                color: var(--black-font);
            }
        }
        &-container{
            position: absolute;
            padding: 3px 20px;
            overflow: hidden;
            margin-top: 5px;
            background-color: white;
            box-shadow: inset 3px 3px 5px 0px #eeeeee, inset -3px -3px 5px 0px #eeeeee;
            border: solid 1px var(--dark-color);
            z-index: 2;
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
        &-window{
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 1;
        }
    }

    .icon{
        width: auto;
        transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        &-active{
            transform: rotate(180deg);
        }
    }
</style>