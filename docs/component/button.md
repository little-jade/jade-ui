<script setup>
    import DamoType from "../examples/button/type.vue";
    import DamoSize from "../examples/button/size.vue";
    import DamoIcon from "../examples/button/icon.vue";
    import DamoState from "../examples/button/state.vue";
</script>

# Button 按钮

## 基础按钮

<DamoType/>

::: details 查看源代码
<<< @/examples/button/type.vue
::: 

## 大小
<DamoSize/>

::: details 查看源代码
<<< @/examples/button/size.vue
::: 

## 图标
<DamoIcon/>

::: details 查看源代码
<<< @/examples/button/icon.vue
::: 

## 状态
<DamoState/>

::: details 查看源代码
<<< @/examples/button/state.vue
::: 

## API
### props 属性
| 属性 | 类型 | 默认值 | 说明 |
|:---:|:---:|:---:|:---:|
| type | filled \| filled\-tonal \| elevated \| outlined \| text | filled | 按钮类型 |
| size | medium \| large \| small | medium | 按钮大小 |
| disabled | boolean | false | 不可用按钮 |
| loading | boolean | false | 是否加载中 |
| isRightIcon | boolean | false | 图标在右 |
| circle | boolean | false | 圆形按钮 |

### slots 插槽
| 插槽名 | 说明 |
| ----- | ----- |
| default | 按钮内容 |
| icon | 按钮图标 |

### events 事件
| name | 说明 |
| ----- | ----- |
| click | 点击事件 |
