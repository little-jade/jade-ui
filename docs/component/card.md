# Card 卡片组件

## 基础卡片

::: demo
```vue
<JaCard 
headline="headline" 
subhead="subhead" 
text="Cards should be easy to scan for relevant and actionable information. Elements like text and images should be placed on cards in a way that clearly indicates hierarchy.">
</JaCard>
```
:::


## 图片卡片

::: demo
```vue
<JaCard imgUrl="/img/card.jpg">
<h4>headline</h4>
<h5>subhead card</h5>
<p>Cards should be easy to scan for relevant and actionable information. Elements like text and images should be placed on cards in a way that clearly indicates hierarchy.</p>
<JaButton>Button</JaButton>
</JaCard>
```
:::

## 卡片扩展

::: demo
```vue
<JaCard headline="card headline">
  <template #header>header slot</template>
  <template #footer>footer slot</template>
  <h4>headline</h4>
  <h5>subhead card</h5>
  <p>Cards should be easy to scan for relevant and actionable information. Elements like text and images should be placed on cards in a way that clearly indicates hierarchy.</p>
</JaCard>
```
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
