<script setup>
    import DamoBase from "../examples/card/base.vue";
    import DamoImg from "../examples/card/img.vue";
    import DamoAppend from "../examples/card/append.vue";
    import DamoState from "../examples/card/state.vue";
</script>

# Card 卡片组件

## 基础卡片

<DamoBase/>

::: details 查看源代码
<<< @/examples/card/base.vue
::: 

## 图片卡片

<DamoImg/>

::: details 查看源代码
<<< @/examples/card/img.vue
::: 

## 卡片扩展

<DamoAppend/>

::: details 查看源代码
<<< @/examples/card/append.vue
::: 

## 卡片状态

<DamoState/>

::: details 查看源代码
<<< @/examples/card/state.vue
::: 

## API
### props 
| 属性 | 说明 | 类型 | 可选值 | 默认值 | 
| --- | ---- | ---- | ----- | ------ | 
| type | 卡片类型 | string | elevated / filled / outlined | filled |
| state | 卡片状态 | string | enabled / disabled | enabled |
| imgUrl | 图片地址 | string | - | - |

### slots
| 插槽名 | 说明 |
| ----- | ----- |
| header | header拓展 |
| footer | footer拓展 |
| default | 卡片内容 |
