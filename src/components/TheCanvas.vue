<template>
    <canvas id="canvas" :width="width" :height="height"></canvas>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import {useStore} from '@/store/index';
const store = useStore()

//作画
const width = window.innerWidth;
const height = window.innerHeight;
const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');

//鼠标事件
const active = ref<boolean>(false)

window.addEventListener('mousedown', () => {
    active.value = true;
    console.log('mousefown')
})

window.addEventListener('mousemove', (e) => {
    if (active.value) {
        console.log(e.pageX,e.pageY)
        // draw(e)
    }
})

window.addEventListener('mouseup', () => {
    active.value = false
})

//画图
// function draw(event) {
//     context.lineWidth = store.width;
//     context.lineCap = 'round';
//     context.strokeStyle = store.color;

//     context.lineTo(event.clientX, event.clientY);
//     context.stroke();
//     context.beginPath();
//     context.moveTo(event.clientX, event.clientY);
// }
</script>

<style></style>