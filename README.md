### 目录结构
> *标星号的目录为ToolBar组件自身维护的api，不要进行改动*
```
my-app
├── api //请求api接口
├── component // 组件
│   ├── SvgIcon // svg图标组件
│   └── ToolBar // ToolBar组件
│       ├── api // ToolBar初始化数据以及服务插件的中间件及相关api *
│       │   ├── initToolBar // 用于初始化ToolBar数据并将插件提供给ToolBar *
│       │   └── middleware // 提供插件承载的模板以及注册插件的核心api *
│       │       ├── ToolBarEffect // 插件注入监听及控制模板的事件处理 *
│       │       │   └── template // 插件容器模板 *
│       │       └── plugin // useToolBarEffect中间件api
│       ├── children // ToolBar自身控件的tsx *
│       │   └── ToolBarItem // ToolBar的actions控件 *
│       └── plugin // 插件以及将插件注入至ToolBar
│           ├── api // 提供控制模板操作的一些api
│           └── plugins // 编写的插件存放的位置，插件即ToolBar组件的拓展组件，如点击评论图标展开的评论组件、点击收藏展开的收藏组件等。如何将插件注入至ToolBar请参照:my-app/component/ToolBar/plugin/plugins/index.ts
│               └── comment
├── example // 一些封装好的api使用样例或使用规范
│   ├── ToolBarEffect // useToolBarEffect api的使用样例
│   └── utils // 工具api使用样例
│       ├── response
│       ├── service
│       └── style
├── pages
│   └── api
├── public
├── static
│   └── icons
│       └── svg // 提供给SvgIcon组件的svg文件存放目录
├── styles
├── test // 一些用于测试的代码
│   ├── ToolBarEffect
│   ├── example
│   └── utils
├── type // 比较核心或公用的type类型存放在这里，建议在此目录单独创建一个文件夹
│   └── article
└── utils // 可复用的工具api，建议根据功能划分创建文件夹 （使用方法在最上层的example目录）
    ├── api
    │   ├── response
    │   └── service
    └── style
```