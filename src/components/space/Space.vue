<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, computed } from "vue";

interface Props {
  gap?: string;
  align?: "center" | "start" | "end";
  justify?: "start" | "end" | "center" | "around" | "between";
  vertical?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  gap: "10px",
  align: "center",
  justify: "start",
  vertical: false,
});
const style = computed(
  () => `
  display: flex; 
  flex-direction: ${props.vertical ? "column" : "row"};
  align-items: ${props.align};
  justify-content: ${props.justify};
  gap: ${props.gap};  
`
);
</script>
