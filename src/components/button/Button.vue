<template>
  <button type="button" class="btn" :class="`btn btn-${type} btn-${size}`">
    <span v-if="icon" :class="icon"></span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
type ButtonType = "elevated" | "filled" | "outlined" | "text" | "primary"
type ButtonSize = "lg" | "medium" | "sm"
interface Props {
  type?: ButtonType
  size?: ButtonSize
  icon?: string
}
withDefaults(defineProps<Props>(), {
  type: "primary",
  size: "medium"
})
</script>
