### 目录结构
```
my-app
├── api //请求api接口
│   └── article.ts
├── component
│   ├── SvgIcon // svg图标组件
│   │   ├── SvgIcon.module.css
│   │   └── SvgIcon.tsx
│   └── ToolBar // ToolBar组件
│       ├── ToolBar.module.css
│       ├── ToolBar.tsx
│       ├── children
│       │   └── ToolBarItem
│       │       ├── ToolBarItem.module.css
│       │       └── ToolBarItem.tsx
│       └── components
├── pages
│   └── api // mock api
├── static
│   ├── icons
│   │   └── svg // svg文件图标存放在此
│   │       ├── comment.svg
│   │       ├── down.svg
│   │       └── ...
│   └── index.js
├── styles
│   ├── Home.module.css
│   └── globals.css
├── test // 测试
│   ├── index.ts
│   └── utils
│       └── index.ts
├── type // 比较核心或公用的type类型存放在这里，建议单独创建一个文件夹，Example: article
│   ├── article
│   │   └── index.ts
│   └── index.ts
└── utils // 比较核心或公用的工具函数存放在这里，建议根据功能划分创建文件夹
    ├── api
    │   ├── response
    │   │   ├── index.ts
    │   │   └── type.ts
    │   └── service
    │       └── index.ts
    └── style
        └── index.ts
```