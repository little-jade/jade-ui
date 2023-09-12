<template>
    <div :class="classes">
        <button class="ja-notice__close" @click="close()">X</button>
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';

export interface Props {
    title?: string
    content?: string
    type?: string
    hasCancle?: boolean
    duration?: number
}
const props = withDefaults(defineProps<Props>(), {
    title: 'notice title',
    content: 'notice content',
    type: 'info',
    hasCancle: true,
    duration: 0
});
const classes = computed(() => [
  "ja-notice",
  `ja-notice--${props.type}`,
]);
const emit = defineEmits<{
  (e: 'close'): void
}>()
let timer:number;
onMounted(()=>{
    if(props.duration == 0) return;
    timer = setTimeout(()=>{close()}, props.duration);
});
onUnmounted(()=>{
    clearTimeout(timer);
});
function close() {
    emit('close');
}
</script>
<style>
.ja-notice {
    background-color: #fff;
    padding: 20px;
    width: 300px;
    color: #000;
}
.ja-notice--success {
    color: green;
}
.ja-notice--error {
    color: red;
}
.ja-notice--warning {
    color: orange;
}
.ja-notice__close {
    float: right;
    z-index: 1;
}
</style>