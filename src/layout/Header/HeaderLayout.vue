<template>
    <header class="Header" v-once>
        <div class="Header-container">
            <h1 class="Header-title">Poke<span class="colored--red">Find</span></h1>
            <h3 class="Header-subtitle"><span class="colored--green">Supra</span> Version</h3>
        </div>
        <div class="Header-caption">
            <slot name="caption"/>
        </div>
    </header>
</template>
<script lang='ts' setup>
    
</script>
<styles lang='scss' scoped>
@keyframes background {
        0% {
        background-position: 0% 50%; 
        }
        25%{
            background-position: 50% 100%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    .Header{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: .9375rem;
        min-height: 400px;
        background: linear-gradient(90deg, var(--green) 0%, var(--red) 99.48%);
        background-size: 200% 100%;
        animation: background 15s linear infinite alternate;
        user-select: none;
        color: var(--white);
        &-title{
            font-size: clamp(3.5em, 10vw, 7em);
            line-height: .8em;
            font-weight: bold;
            text-align: center;
        }
        &-subtitle{
            line-height: normal;
            font-size: 1.8em;
            font-weight: bolder;
            text-align: center;
        }
        &-caption{
            font-family: var(--secundary);
            font-size: clamp(1em, 1.7vw, 1.7em);
        }
    }

    .colored--red{
        color: var(--red);
    }
    .colored--green{
        color: var(--green);
    }
</styles>