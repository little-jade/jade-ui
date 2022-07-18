<template>
<div class="card" :class="`card-${type} card-${state}`">
  <div v-if="$slots.header" class="card-header">
    <slot name="header"></slot>
  </div>
  <img v-if="imgUrl" class="card-img-top" :src="imgUrl" alt="card top img"/>
  <div class="card-body">
    <h1 v-if="headline" class="card-title">{{ headline }}</h1>
    <h2 v-if="subhead">{{ subhead }}</h2>
    <p v-if="text" class="card-text">{{ text }}</p>
    <slot></slot>
  </div>
  <div v-if="$slots.footer" class="card-footer">
    <slot name="footer"></slot>
  </div>
</div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
// import type { StyleValue } from 'vue'
type CardType = 'elevated' | 'filled' | 'outlined'
type CardState = 'enabled' | 'disabled'
interface Props {
  type?: CardType
  state?: CardState
  imgUrl?: string
  headline?: string
  subhead?: string
  text?: string
}
withDefaults(defineProps<Props>(), {
  type: 'filled',
  CardState: "enabled"
})
</script>
