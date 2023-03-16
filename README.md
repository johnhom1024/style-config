# style-config

一个`tailwind`或者`windicss`的预设插件。

## 安装

```
yarn add -D @johnhom/style-config 

# 或者 npm install -D @johnhom/style-config
```

## 导入`style-config`

在`tailwind.config.js`或者`windi.config.js`文件下，导入`@johnhom/style-config`:

```json
import { createPreset } from '@jonhom/style-config'

module.exports = {
  presets: [
    createPreset({
      unit: 'px'
    })
  ]
}
```
