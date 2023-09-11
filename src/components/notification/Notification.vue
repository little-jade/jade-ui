<template>
        <div :class="classes" v-if="visible">
            <p>{{ message }}</p>
        </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
    visible?: boolean
    title?: string
    message?: string
    type?: string
    hasCancle?: boolean
    duration?: number
}
const props = withDefaults(defineProps<Props>(), {
    visible: true,
    message: 'test message',
    type: 'info',
    duration: 10000
});
const classes = computed(() => [
  "ja-message",
  `ja-message--${props.type}`,
]);
const emit = defineEmits<{
  (e: 'close'): void
}>()

setTimeout(() => {
    emit('close')
}, props.duration);
</script>
<style>
.ja-message {
    background-color: #fff;
    padding: 20px;
    width: 300px;
    color: #000;
}
.ja-message--success {
    color: green;
}
.ja-message--error {
    color: red;
}
.ja-message--warning {
    color: orange;
}
</style>