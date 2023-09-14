<template>
    <div v-show="visible" class="ja-dialog__overlay">
        <div class="ja-dialog" v-show="visible">
            <button v-if="showClose" class="ja-dialog__close" @click="handleAction('close')">X</button>
            <h3 class="ja-dialog__title">{{ title }}</h3>
            <div class="ja-dialog__content">
                <slot></slot>
            </div>
            <div class="ja-dialog__action">
                <slot name="action">
                <ja-button type="outlined" @click="handleAction('cancle')">cancle</ja-button>
                <ja-button @click="handleAction('ok')">ok</ja-button>
                </slot>
            </div>
        </div>
    </div>
    

</template>
<script setup lang="ts">
import { JaButton } from '..' 
interface Props {
    visible?: boolean
    title?: string
    showClose?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    visible: false,
    title: 'ja dialog',
    showClose: true
});
const emit = defineEmits<{
  (e: 'action', action: string): void
}>()
function handleAction(action:string) {
    emit('action',action);
}
</script>
