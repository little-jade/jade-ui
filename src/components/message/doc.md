# MessageBox：弹出框组件
## 文件
- MessageComp.vue
- message.js
- AlertComp.vue
- alert.js
## 组件类型
- alert：消息体组件，通过类型控制颜色。
- dialog：组件，提供弹框框架，内容自定义。
    - 显示控制
    - 位置居中； 变体（从页面四周出现。从元素四周出现。）
    - 带有蒙层
    - 关闭事件
    - 内容插槽

- messageComponent：alert+dialog，专门做消息提示的弹框。
- message：用户操作后的message提示。函数调用（创建messageComponent）。不阻塞页面，没有蒙层。自动创建、自动消失。
- notifacation：系统提示的message。
- messagebox：需要交互的message，有按钮，有回调。
    - alert：提示，只能确认。
    - confirm：确认，或拒绝。
    - prompt：提交内容。
## 手动渲染
使用vue提供的vNode类，创建一个虚拟dom。
调用vue提供的render方法，渲染虚拟dom到div元素。
使用dom方法，插入到body的最后一个子元素。
## 显示隐藏
通过props：visible控制。
通过render一个空元素到div实现。
## 回调或promise回调
在message上监听onAction事件。将关闭或确认按钮作为action返回值。
在事件回调里调用promise到完成或拒绝函数。
如果有键盘输入，通过双向绑定model获取输入字符串。

## 注册：绑定到全局变量