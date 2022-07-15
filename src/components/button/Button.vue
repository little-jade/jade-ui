<template>
<button>{{ text }}</button>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
interface Props {
  type: String
  size: Size
  text: String
}
withDefaults(defineProps<Props>(), {
  shadow: 'always',
})
</script>

<style scoped lang = 'scss'>

</style>
