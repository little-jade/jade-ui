<template>
  <ja-button @click="open('top-left')">top-left</ja-button>
  <button @click="open('top')">top</button>
  <button @click="open('top-right')">top-right</button>
  <button @click="open('bottom-left')">bottom-left</button>
  <button @click="open('bottom')">bottom</button>
  <button @click="open('bottom-right')">bottom-right</button>
  <button @click="notification.clear()">clear</button>
  <div>
    <ja-button @click="message.info('info')">info</ja-button>
    <ja-button @click="message.success('success')">success</ja-button>
    <ja-button @click="message.warning('waring')">warning</ja-button>
    <ja-button @click="message.error('error')">error</ja-button>
  </div>
  <div>
    <ja-button @click="()=>{showDialog = !showDialog}">show dialog</ja-button>
    <ja-button @click="openDialog()"> alert </ja-button>
    <JaDialog :visible='showDialog' @action="()=>{showDialog=false}">
      <p>下面的示例会渲染一个非模态对话框。在对话框激活的状态下，点击“OK”按钮将会关闭对话框。</p>
    </JaDialog>
  </div>
</template>
<script setup lang="ts">
import notification from './components/notification';
import message from './components/message';
import {JaDialog} from './components/dialog';
import { ref } from 'vue';
let showDialog = ref(false);
function open(placement:string){
  notification.open({
    placement,
    title:'notice-vue-titile',
    content: `下面的示例会渲染一个非模态对话框。在对话框激活的状态下，点击“OK”按钮将会关闭对话框。`,
    type:'success',
    hasCancle: false,
    duration: 0
  })
}
function openDialog() {
  JaDialog.alert('alert-title', 'alert-message').then(res => {
    message.success(res)
  }).catch(err=>{
    message.error(err)
  })
}
</script>
<style>

@import "./assets/base.css";

</style>