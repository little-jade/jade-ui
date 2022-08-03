<template>
  <button type="button" :class="classes">
    <Icon v-if="($slots.icon || loading)" 
    :class="{
      'ja-button__prepend': $slots.default && !isRightIcon, 'ja-button__append': $slots.default && isRightIcon,
      'ja-button__loading-icon': loading
      }"
    >
      <LoadingIcon v-if="loading"></LoadingIcon>
      <slot v-else name="icon"></slot>
    </Icon>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import {Loading3QuartersOutlined as LoadingIcon} from '@vicons/antd'
import { Icon } from '@vicons/utils'
import { withDefaults, computed } from 'vue'
type ButtonType = "elevated" | "filled" | "outlined" | "text" | "filled-tonal"
type ButtonSize = "medium" | "large" | "small"
interface Props {
  type?: ButtonType
  size?: ButtonSize
  isRightIcon?: boolean
  loading?: boolean
  disabled?: boolean
  circle?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: "filled",
  size: "medium",
  loading: false,
  disabled: false
})

const classes = computed(() => [
  'ja-button',
  `ja-button--${props.size}`,
  `ja-button--${props.type}`,
  {
    'ja-button--disabled': props.disabled || props.loading,
    'ja-button--circle': props.circle,
  }
])
</script>
