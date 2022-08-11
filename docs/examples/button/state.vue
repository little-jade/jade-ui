<template>
  <ja-space>
    <ja-button type="filled" disabled>Button</ja-button>
    <ja-button type="filled-tonal" disabled>Button</ja-button>
    <ja-button type="elevated" disabled>Button</ja-button>
    <ja-button type="outlined" disabled>Button</ja-button>
    <ja-button type="text" disabled>Button</ja-button>
  </ja-space>
  <ja-space style="margin-top: 10px">
    <ja-button type="filled" :loading="loading" @click="handleClick"
      >Button</ja-button
    >
    <ja-button type="filled-tonal" loading>Button</ja-button>
    <ja-button type="elevated" loading>Button</ja-button>
    <ja-button type="outlined" loading>Button</ja-button>
    <ja-button type="text" loading>Button</ja-button>
  </ja-space>
  <ja-space style="margin-top: 10px">
    <ja-button type="filled" loading isRightIcon>Button</ja-button>
    <ja-button type="filled-tonal" loading isRightIcon>Button</ja-button>
    <ja-button type="elevated" loading isRightIcon>Button</ja-button>
    <ja-button type="outlined" loading isRightIcon>Button</ja-button>
    <ja-button type="text" loading isRightIcon>Button</ja-button>
  </ja-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const loading = ref(false);
function handleClick() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 5 * 1000);
}
</script>
