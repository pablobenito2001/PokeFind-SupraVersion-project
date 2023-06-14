<template>
    <div class="Stats">
        <div class="Stats-container">
            <img :src="props.sprite" alt="">
        </div>
        <div class="Stats-stats">
            <div 
            v-for="(item, index) in props.stats"
            :key="index"
            class="Stats-percent">
                <svg class="Stats-svg" > 
                    <circle cx="70" cy="70" r="70" class="Stats-circle"></circle>
                    <circle cx="70" cy="70" r="70" class="Stats-circle" :style="{ 'stroke-dashoffset': 440 - (440 * item.base_stat) / 300 }"></circle>
                </svg>
                <div class="Stats-stat Stats-stat--name">
                    <span>{{ item.stat.name }}</span>
                </div>
                <div class="Stats-stat Stats-stat--number">
                    <span>{{ item.base_stat }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
    type Props = {
        stats: {
            base_stat: number,
            effort: number,
            stat: {
                name: string
            }
        }[];
        sprite: string;
    }

    const props = defineProps<Props>();
</script>
<style lang='scss' scoped>
    $stats-size: 9.375rem;

    .Stats{
        display: grid;
        grid-template-columns: 18.75rem 500px;
        grid-auto-rows: auto;
        gap: .625rem;
        background-color: var(--white);
        border-radius: 1.25rem;
        padding: .9375rem;
        &-container{
            max-width: 37.5rem;
        }
        &-stats{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax($stats-size, 1fr));
            grid-auto-rows: $stats-size;
            gap: .625rem;
            padding: 5px;
        }
        &-percent{
            display: flex;
            position: relative;
            height: $stats-size;
            width: $stats-size;
            &:hover .Stats-stat--number{
                opacity: 1;
            }
            &:hover .Stats-stat--name{
                opacity: 0;
            }
        }
        &-svg{
            position: relative;
            height: $stats-size;
            width: $stats-size;
            transform: rotate(270deg);
        }
        &-circle{
            fill: transparent;
            width: 100%;
            height: 100%;
            stroke-width: 5;
            stroke: var(--alpha-white);
            transform: translate(5px, 5px);
            stroke-linecap: round;
            &:nth-child(2){
                stroke: var(--green);
                stroke-dasharray: 440;
            }
        }
        &-stat{
            position: absolute;
            inset: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: capitalize;
            font-family: var(--secundary);
            transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
            font-weight: 600;
            font-size: .8em;
            &--number{
                opacity: 0;
            }
        }
    }
</style>