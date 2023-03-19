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

**具体的值范围为：1~800整数**
