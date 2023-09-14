<template>
    <TransitionGroup tag="div" :class="classes" name="fade" @after-leave="onAfterLeave">
        <Notification v-for="item of notices.value" 
        class="ja-notification-group__item"
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
    'ja-notification-group',
    ...props.placement.split('-').map(item=>`ja-notification-group--${item}`)
])
const emit = defineEmits<{
  (e: 'allRemoved'): void
}>()
function onAfterLeave() {
    if(props.notices.value.length) return;
    emit('allRemoved');
}
</script>
