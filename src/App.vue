<template>
  <button @click="open('top-left')">top-left</button>
  <button @click="open('top')">top</button>
  <button @click="open('top-right')">top-right</button>
  <button @click="open('bottom-left')">bottom-left</button>
  <button @click="open('bottom')">bottom</button>
  <button @click="open('bottom-right')">bottom-right</button>
  <button @click="clear()">clear</button>
</template>
<script setup lang="ts">
import notification from './components/notification';
function clear() {
  notification.clear();
}
function open(placement:string){
  notification.open({
    placement,
    title:'notice-vue-titile',
    type:'success',
    duration: 0
  })
}
</script>
<style>

@import "./assets/base.css";

</style>