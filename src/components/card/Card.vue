<template>
<div class = "card" :class = "[`card--is-${shadow}-shadow`]">
  <header v-if = "header || $slots.header" class = "card__header">
    <slot name = "header">{{header}}</slot>
  </header>
  <main :class = "bodyStyle ? [] : 'card__body'" :style = "bodyStyle">
    <slot></slot>
  </main>
</div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import type { StyleValue } from 'vue'
type CardType = 'always' | 'hover' | 'never'
interface CardProps {
  header?: String
  bodyStyle?: StyleValue
  shadow?: CardType
}
withDefaults(defineProps<CardProps>(), {
  shadow: 'always',
})
</script>

<style lang = 'scss' scoped>
.card {
  border-radius: 2px;
  border: 1px solid grey;
  background-color: white;
  overflow: hidden;
  color: black;
  transition: 0.3s;
  &--is-always-shadow {
    box-shadow: 0 0 5px grey;
  }
  &--is-hover-shadow:hover {
    box-shadow: 0 0 5px grey;
  }
  &__header {
    font-size: 16px;
    border-bottom: 1px solid grey;
    padding-left: 20px;
  }
  &__body {
    padding: 20px;
    font-size: 14px;
  }
}
</style>
