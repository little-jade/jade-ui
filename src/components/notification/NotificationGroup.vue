<template>
    <TransitionGroup tag="div" class="container" id="noticeGroup">
        <!-- <div v-for="item of notices.value" :key="item.key">{{ item.key }}</div> -->
        <Notification v-for="item of notices.value" :key="item.key" v-bind="item"  @close="$emit('remove',item.key)">
            
        </Notification>
    </TransitionGroup> 
</template>

<script setup lang="ts">
import Notification from './Notification.vue';
import { watch, type Ref } from "vue";

interface Props {
    notices: Ref<[]>
    placement: string
}
const props = withDefaults(defineProps<Props>(), {
});
watch(props.notices,()=>{
    console.log(props.notices);
})
function onAfterLeave() {}
</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: all 0.8s;
}
.v-leave-to,
.v-enter-from {
    transform: translateY(-20px);
    opacity: 0;
}
</style>