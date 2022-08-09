<template>
  <ja-space>
    <ja-button type="filled">Button
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
    <ja-button type="filled-tonal">Button
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
    <ja-button type="elevated">Button
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
    <ja-button type="outlined">Button
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
    <ja-button type="text">Button
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
  </ja-space>
  <ja-space style="margin-top: 10px;">
    <ja-button type="filled" isRightIcon>Button
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
    <ja-button type="filled-tonal" isRightIcon>Button
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
    <ja-button type="elevated" isRightIcon>Button
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
    <ja-button type="outlined" isRightIcon>Button
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
    <ja-button type="text" isRightIcon>Button
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
  </ja-space>
  <ja-space style="margin-top: 10px;">
    <ja-button type="filled" circle>
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
    <ja-button type="filled-tonal" circle>
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
    <ja-button type="elevated" circle>
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
    <ja-button type="outlined" circle>
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
    <ja-button type="text" circle>
      <template #icon><EditFilled></EditFilled></template>
    </ja-button>
  </ja-space>
</template>
<script lang="ts" setup>
import { EditFilled } from "@vicons/antd"
</script>
