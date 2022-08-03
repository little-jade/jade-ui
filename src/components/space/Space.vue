<template>
  <div :class="classes" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, computed } from 'vue'

interface Props {
  gap?: string
  align?: 'center' | 'start' | 'end'
  vertical?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  gap: "10px",
  align: "center",
  vertical: false,
})
const style = computed(() => `display:flex; gap:${props.gap}; align-items: center`)
const classes = computed(() => [
  'ja-space'
])
</script>
