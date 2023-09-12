<template>
    <TransitionGroup tag="div" :class="classes" name="fade" @after-leave="onAfterLeave">
        <Notification v-for="item of notices.value" 
        class="ja-notice-group__item"
        :key="item.key" 
        v-bind="item"  
        @close="$emit('remove',item.key)">
        </Notification>
    </TransitionGroup> 
</template>

<script setup lang="ts">
import Notification from './Notification.vue';
import { computed, type Ref } from "vue";

interface Props {
    notices: Ref<[]>
    placement: string
}
const props = withDefaults(defineProps<Props>(), {
});
const classes = computed(()=>[
    'ja-notice-group',
    ...props.placement.split('-').map(item=>`ja-notice-group--${item}`)
])
const emit = defineEmits<{
  (e: 'allRemoved'): void
}>()
function onAfterLeave() {
    if(props.notices.value.length) return;
    emit('allRemoved');
}
</script>

<style>
.ja-notice-group {
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    display: flex;
    align-items:center;
    flex-direction: column;
    gap:20px;
    padding:40px;
    pointer-events: none;
}
.ja-notice-group--top,
.ja-notice-group--top-left,
.ja-notice-group--top-right
 {
    justify-content: flex-start;
}
.ja-notice-group--bottom,
.ja-notice-group--bottom-left,
.ja-notice-group--bottom-right
 {
    justify-content: flex-end;
}
.ja-notice-group--left,
.ja-notice-group--top-left,
.ja-notice-group--bottom-left
 {
    align-items: flex-start;
}
.ja-notice-group--right,
.ja-notice-group--top-right,
.ja-notice-group--bottom-right
 {
    align-items: flex-end;
} 
.ja-notice-group__item {
    pointer-events: auto;
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>