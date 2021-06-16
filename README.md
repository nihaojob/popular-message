## 概述
轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。
> 样式与实现参考 iview
<p align="center"><img width="492" src="./examples.png" /></p>

## Use

```js
const $message = new Message()

<!-- 设置全局配置 -->
$message.config({ top:85, duration: 4})

<!-- 普通调用 -->
$message.info('这是一条普通的提示')
$message.success('这是一条成功的提示')
$message.warning('这是一条警告的提示')
$message.error('这是一条格式错误的提示')
$message.loading('正在加载中...')

<!-- 关闭按钮 -->
$message.info({
    content:'这是一条带关闭按钮的消息',
    onClose:() => console.log('关闭'),
    closable: true,
    duration: 6
})

<!-- 注销 -->
$message.destroy()
```

## API
### Message instance
通过直接调用以下方法来使用：
- `$Message.info(config)`
- `$Message.success(config)`
- `$Message.warning(config)`
- `$Message.error(config)`
- `$Message.loading(config)`

参数 config 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：

|  属性 | 说明  | 类型|  默认值|
|---    |---   |--- | ---   |
|  content |  提示内容 |String | -|
|  duration |  自动关闭的延时，单位秒，不关闭可以写 0 |Number | 2|
|  onClose |  关闭时的回调	 |Function | -|
|  closable |  是否显示关闭按钮	 |Boolean | false|

另外提供了全局配置和全局销毁的方法：
- `this.$Message.config(options)`
- `this.$Message.destroy()`

```JS
$Message.config({
    top: 50,
    duration: 3
});
```

|  属性 | 说明  | 类型|  默认值|
|---    |---   |--- | ---   |
|  top |  提示组件距离顶端的距离，单位像素 |Number | 24|
|  duration |  默认自动关闭的延时，单位秒 |Number | 1.5|

