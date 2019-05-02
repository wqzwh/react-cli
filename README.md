# react 单页面工程脚手架

集成 react+redux+redux-saga+react-router+antd+lodash+moment+axios+less

> react project

## 基本命令

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# lint检测命令
npm run lint

# 项目包大小分析命令
npm run analyz

# 自动化测试命令
npm run test

# build之后的本地测试
npm run prod

# 测试PWA
npm run start

# dll打包
npm run dll
```

## 自动化测试说明

> 注意：`.babelrc`文件中`plugins`和`env`无法共享，在执行`npm run test`的时候请先手动注释`plugins`代码，基本如下：

```
{
  "presets": [
    ["@babel/preset-env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      },
      "useBuiltIns": "entry"
    }],
    "@babel/react"
  ],
  // "plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-syntax-dynamic-import", ["import", {
  //   "libraryName": "antd",
  //   "libraryDirectory": "es",
  //   "style": true // `style: true` 会加载 less 文件
  // }]],
  "env": {
    "test": {
      "plugins": ["transform-es2015-modules-commonjs"]
    }
  }
}
```

- `coverage`文件夹单元测试概览内容
- 单元测试在`/test/__test__/`文件夹下进行编写
