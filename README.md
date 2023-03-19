# style-config

一个`tailwind`或者`windicss`的预设插件。

## 安装

```
yarn add -D @johnhom/style-config 

# 或者 npm install -D @johnhom/style-config
```

## 导入`style-config`

在`tailwind.config.js`或者`windi.config.js`文件下，导入`@johnhom/style-config`:

```
import { createPreset } from '@jonhom/style-config'

module.exports = {
  presets: [
    createPreset({
      unit: 'px'
    })
  ]
}
```

## 预设值

createPreset会创建一个预设的值，具体生成的预设值如下：

### 宽度和高度的值 Width、Height

可以直接使用的**具体的值范围为：1~800整数**。

示例：

```
<div class="w-456 h-678"></div>
```

同时还支持一下的类（与官方默认值相同）：

**宽度**：

| 类名   | 属性      |
|--------|-----------|
| w-auto | width: auto; |
| w-full | width: 100%; |
| w-screen | width: 100vh; |
| w-min | width: min-content; |
| w-max | width: max-content; |
| w-fit | width: fit-content; |

**高度**

| 类名   | 属性      |
|--------|-----------|
| h-auto | height: auto; |
| h-full | height: 100%; |
| h-screen | height: 100vh; |
| h-min | height: min-content; |
| h-max | height: max-content; |
| h-fit | height: fit-content; |