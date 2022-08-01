<template>
  <ja-space>
    <ja-button>
        <template #icon><EditFilled></EditFilled></template>
        Edit
    </ja-button>
    <ja-button isRightIcon>
        <template #icon><EditFilled></EditFilled></template>
        Edit
    </ja-button>
    <ja-button circle>
        <template #icon><EditFilled></EditFilled></template>
    </ja-button>
  </ja-space>
</template>
<script lang="ts" setup>
import { EditFilled } from "@vicons/antd"
</script>
