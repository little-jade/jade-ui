<template>
  <span :style="style">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

const style = computed(
  () => `
    width: 1em;
    height: 1em;
    display: inline-flex;
`
);
</script>
