<template>
    <header>
        <div class="icon-wrapper">
            <label for="color-picker" class="label">
                <ColorIcon class="icon"></ColorIcon>
            </label>
            <input type="color" class="picker" id="color-picker" name="color-picker" v-model="color">
        </div>
        <div class="icon-wrapper line">
            <label for="line-picker" @click="toggleLines" class="label">
                <LinesIcon class="icon"></LinesIcon>
            </label>
            <select v-if="lineSwitch" v-model="width" name="line-picker" id="line-picker" class="picker">
                <option v-for="line in lineOptions" :key="line.key" :value="line.value">{{ line.value }}
                </option>
            </select>
        </div>
        <div class="icon-wrapper">
                <EraserIcon class="icon"></EraserIcon>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import ColorIcon from '@/assets/ColorIcon.vue';
import LinesIcon from '@/assets/LinesIcon.vue';
import EraserIcon from '@/assets/EraserIcon.vue';

//state management
import {useStore} from '@/store/index';
const store = useStore()

const color = ref('')
const width = ref(1)
const lineSwitch = ref<boolean>(false)

watch(color,(newValue)=>{
    store.setColor(newValue)
})
watch(width,(newValue)=>{
    store.setWidth(newValue)
})
function toggleLines() {
    lineSwitch.value = !lineSwitch.value;
}
const lineOptions = [
    { key: '1px', value: '1', label: '1px' },
    { key: '2px', value: '2', label: '2px' },
    { key: '3px', value: '3', label: '3px' },
    { key: '5px', value: '5', label: '5px' },
    { key: '10px', value: '10', label: '10px' },
]
</script>

<style scoped>
header {
    background-color: var(--color-blue);
    padding: 5px 1rem;
    display: flex;
}

#color-picker {
    display: none;
}

.line.icon-wrapper {
    position: relative;
}

#line-picker {
    position: absolute;
    width: 50px;
    top: 5px;
    left: 40px;
}

select,
option {
    padding: 3px;
    border: none;
}
select {
    background-color: var(--color-orange);
}
.icon:hover {
    scale: 1.15;
}
</style>