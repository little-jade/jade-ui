<template>
    <div :class="classes">
        <button v-if="hasCancle" class="ja-notification__close" @click="close()">X</button>
        <h3 class="ja-notification__title">{{ title }}</h3>
        <p class="ja-notification__content">{{ content }}</p>
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
  "ja-notification",
  `ja-notification--${props.type}`,
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
