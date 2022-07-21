# Button 按钮

## 基础按钮

::: demo
```vue
<template>
  <JaButton>默认按钮</JaButton>
</template>
```
:::



## 大小
::: demo
```vue
<template>
  <JaButton size="lg">大按钮</JaButton>
  <JaButton>正常按钮</JaButton>
  <JaButton size="sm">小按钮</JaButton>
</template>
```
:::

## 图标
::: demo
```vue
<template>
  <JaButton icon="lg">前置图标</JaButton>
  <JaButton icon="deit"></JaButton>
  <JaButton icon="sm" icon-position="right">后置图标</JaButton>
</template>
```
:::

## 状态

::: demo
```vue
<template>
  <JaButton disabled>不可用</JaButton>
  <JaButton loading>加载中</JaButton>
</template>
```
:::

## API
### props 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | ---- | ---- | ----- |
| type | elevated / filled / outlined / text | filled | 按钮类型 |
| disabled | boolean | false | 是否不可用 |
| loading | boolean | false | 是否加载中 |
| size | normal / large / small | normal | 按钮大小 |
| icon | string | - | 按钮图标 |
| icon-position | left / right | left | 图标位置 |

### slots 插槽
| 插槽名 | 说明 |
| ----- | ----- |
| default | 按钮内容 |

### events 事件
