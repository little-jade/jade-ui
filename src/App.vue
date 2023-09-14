<template>
  <ja-button @click="open('top-left')">top-left</ja-button>
  <button @click="open('top')">top</button>
  <button @click="open('top-right')">top-right</button>
  <button @click="open('bottom-left')">bottom-left</button>
  <button @click="open('bottom')">bottom</button>
  <button @click="open('bottom-right')">bottom-right</button>
  <button @click="clear()">clear</button>
  <div>
    <ja-button @click="message.info('info')">info</ja-button>
    <ja-button @click="message.success('success')">success</ja-button>
    <ja-button @click="message.warning('waring')">warning</ja-button>
    <ja-button @click="message.error('error')">error</ja-button>

  </div>
</template>
<script setup lang="ts">
import notification from './components/notification';
import message from './components/message';

function clear() {
  notification.clear();
}
function open(placement:string){
  notification.open({
    placement,
    title:'notice-vue-titile',
    content: `下面的示例会渲染一个非模态对话框。在对话框激活的状态下，点击“OK”按钮将会关闭对话框。提供一种机制来关闭 dialog 元素中的对话框是很重要的。例如，Esc 键在默认情况下不会关闭非模态对话框，同时也不能假设用户可以使用一个物理键盘（例如，使用不带物理键盘的触摸屏设备）。

`,
    type:'success',
    hasCancle: false,
    duration: 0
  })
}
</script>
<style>

@import "./assets/base.css";

</style>