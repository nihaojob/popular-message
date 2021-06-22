# popular-message
A lightweight feedback message appearing at the top of the screen, fading automatically. Has many different options for different situations.

[Demo](https://nihaojob.github.io/popular-message)
<p align="center"><img width="492" src="./examples.png" /></p>

[中文](https://github.com/nihaojob/popular-message/blob/main/README.md) | English

## Features

1. API design for iview-$mesage。
2. No dependence，lightweight，200 lines of source code，Smaller after compression。
3. UI Beautiful，Reference iview UI styles。

## Install
1. use unpkg cdn [link](https://unpkg.com/browse/popular-message@1.0.0/index.js)

```HTML
<script src="https://unpkg.com/popular-message/index.js"></script>
<link rel="stylesheet" href="https://unpkg.com/popular-message/index.css">
```
2.use npm or yarn install
```bash
$ npm install popular-message
$ yarn add popular-message
```
## Use
use script，get global variable `$message`。

use npm install，need import The module
```js
import $message from 'popular-message';
import 'popular-message/index.css';
```

use in page
```js
<!-- global configuration -->
$message.config({ top:85, duration: 4})

<!-- types -->
$message.info('this is a info message')
$message.success('this is a success message')
$message.warning('this is a info warning message')
$message.error('this is a info error message')
$message.loading('loading...')

<!-- onClose -->
$message.info({
    content:'this is message can close',
    onClose:() => console.log('close'),
    closable: true,
    duration: 6
})

<!-- destroy -->
$message.destroy()
```

## API
### Message instance
This component can be used with the following static methods:
- `$message.info(config)`
- `$message.success(config)`
- `$message.warning(config)`
- `$message.error(config)`
- `$message.loading(config)`

Parameter config can be string or object. When string, the content will be directly displayed, when object, the detail usage is explained below:

|  Property | Description  | Type|  Default|
|---    |---   |--- | ---   |
|  content |  Prompt's message content	 |String | -|
|  duration |  Time before prompt dismisses, in seconds. Use 0 to not dismiss	 |Number | 2|
|  onClose |  Function to be called after the prompt is closed		 |Function | -|
|  closable |  Whether to show a close button.		 |Boolean | false|

Methods for global configuration and disposal are also provided:
- `$message.config(options)`
- `$message.destroy()`

```JS
$Message.config({
    top: 50,
    duration: 3
});
```

|  Property | Description  | Type|  Default |
|---    |---   |--- | ---   |
|  top |  Prompt's distance from top, in pixels.	 |Number | 24|
|  duration |  Default time before prompt dismisses, in seconds.	 |Number | 1.5|

## Author
秦少卫

nihaojob@163.com

https://juejin.cn/user/3843548383549214/posts