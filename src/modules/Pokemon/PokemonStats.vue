<template>
    <div class="Stats">
        <div 
        v-for="(item, index) in props.stats"
        :key="index"
        class="Stats-container">
            <span class="Stats-name">{{ item.name }}: {{ item.base_stat }}</span>
            <progress
            max="250"
            :value="item.base_stat"
            class="Stats-progress"
            :style="{ '--color': SelectColor(item.base_stat) }">{{ item.base_stat }}</progress>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import SelectColor from '../../utils/SelectColor';

    interface Props {
        stats: { name: string, base_stat: number }[];
    }

    const props = defineProps<Props>()
</script>
<style lang='scss' scoped>
    .Stats{
        max-width: var(--max-width);
        margin: auto;
        padding: var(--padding);
        &-container{
            margin: 0 0 .625rem 0;
        }
        &-progress{
            width: 100%;
            margin: 5px 0 0 0;
            border-radius: 3.125rem;
            overflow: hidden;
            &::-webkit-progress-bar{
                background-color: #dadada;
            }
            &::-webkit-progress-value{
                background-color: var(--color);
                border-radius: 3.125rem;
            }
            &::-moz-progress-bar {
                background-color: var(--color);
                border-radius: 3.125rem;
            }
        }
        &-name{
            font-size: clamp(1.5em, 2vw, 2em);
            text-transform: capitalize;
            line-height: 100%;
            color: var(--grey);
        }
    }
</style>