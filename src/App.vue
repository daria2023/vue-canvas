<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheCanvas from './components/TheCanvas.vue';
import SvgEl from './components/SvgEl.vue';
</script>

<template>
  <TheHeader></TheHeader>
  <!-- <TheCanvas></TheCanvas> -->
  <SvgEl></SvgEl>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  width: 100vw;
  box-sizing:border-box;
}
:root {
  --color-orange: #e7992e;
  --color-blue: #899fb1;
}
</style>
