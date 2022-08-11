<template>
  <div :class="classes">
    <div v-if="$slots.header" class="ja-card__header">
      <slot name="header"></slot>
    </div>
    <img v-if="imgUrl" class="ja-card__img" :src="imgUrl" alt="card top img" />
    <div v-if="headline" class="ja-card__title">{{ headline }}</div>
    <div v-if="subhead" class="ja-card__subtitle">{{ subhead }}</div>
    <div v-if="text" class="ja-card__text">{{ text }}</div>
    <slot></slot>
    <div v-if="$slots.actions" class="ja-card__actions">
      <slot name="actions"></slot>
    </div>
    <div v-if="$slots.footer" class="ja-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
  type?: "elevated" | "filled" | "outlined";
  disabled?: boolean;
  imgUrl?: string;
  headline?: string;
  subhead?: string;
  text?: string;
}
const { type = "elevated", disabled = false } = defineProps<Props>();
const classes = computed(() => [
  "ja-card",
  `ja-card--${type}`,
  {
    "ja-card--disabled": disabled,
  },
]);
</script>
