### 目录结构

```
my-app
├── api //请求api接口
├── component // 组件
│   ├── SvgIcon // svg图标组件
│   └── ToolBar // ToolBar组件
│       ├── children // ToolBar组件的子组件
│       │   └── ToolBarItem
│       └── components // 基于ToolBar组件的拓展组件，如点击评论图标展开的评论组件、点击收藏展开的收藏组件等
├── example // 一些封装好的api使用样例或使用规划
│   └── utils // 工具api使用样例
│       ├── response
│       ├── service
│       └── style
├── pages
│   └── api
├── public
├── static
│   └── icons 
│       └── svg // 用于给SvgIcon组件调用svg图标的svg文件存放目录
├── styles
├── test // 一些用于测试的代码
│   ├── example
│   └── utils
├── type // 比较核心或公用的type类型存放在这里，建议单独创建一个文件夹
│   └── article
└── utils // 比较核心或公用的工具函数存放在这里，建议根据功能划分创建文件夹 （使用方法在最上层的example目录）
    ├── api
    │   ├── response
    │   └── service
    └── style

```