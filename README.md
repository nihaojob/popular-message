中文 | [English](https://github.com/nihaojob/popular-message/blob/main/README-en.md)
# popular-message
轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。

> 重要：请使用1.0.3稳定版本。

[体验Demo](https://nihaojob.github.io/popular-message)
<p align="center"><img width="492" src="./examples.png" /></p>



## 特点

1. 与iview的$mesage组件的API保持一致。
2. 无任何依赖，非常轻量，200 行左右的源码，压缩后更小。
3. UI漂亮，参考iview UI样式。

## Install
1. 直接使用unpkg [在线链接](https://unpkg.com/browse/popular-message@1.0.0/index.js)

```HTML
<script src="https://unpkg.com/popular-message/index.js"></script>
<link rel="stylesheet" href="https://unpkg.com/popular-message/index.css">
```
2. 通过npm 或者 yarn安装
```bash
$ npm install popular-message
$ yarn add popular-message
```
## Use
通过 script 引用，会得到一个全局变量 `$message`。

通过npm安装，需要import导入
```js
import $message from 'popular-message';
import 'popular-message/index.css';
```

在页面中使用
```js
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
- `$message.info(config)`
- `$message.success(config)`
- `$message.warning(config)`
- `$message.error(config)`
- `$message.loading(config)`

参数 config 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：

|  属性 | 说明  | 类型|  默认值|
|---    |---   |--- | ---   |
|  content |  提示内容 |String | -|
|  duration |  自动关闭的延时，单位秒，不关闭可以写 0 |Number | 2|
|  onClose |  关闭时的回调	 |Function | -|
|  closable |  是否显示关闭按钮	 |Boolean | false|

另外提供了全局配置和全局销毁的方法：
- `$message.config(options)`
- `$message.destroy()`

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
|  singleton |  消息框单例模式	 |Boolean | false|

## Author
秦少卫

nihaojob@163.com

https://juejin.cn/user/3843548383549214/posts
