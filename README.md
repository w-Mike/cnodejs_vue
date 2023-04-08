


## 关于该项目的一些疑问：
1. 描述：
    前提： eventBus中存储时间的Object:
        "event1"  --> [func1, func2...]
        "event2"  --> [func1, func2...]
        ...
        eventBus.on("event1", func(){}) 就是给event1事件的数组中添加一个回调函数
        eventBus.trigger("event1", args) 就是触发运行event1事件队列中的所有函数，以args为参数。
    问题： eventBus.trigger 执行函数的逻辑是 func.apply(null, args)  这样执行func函数时候的this是null吗？
          但是从运行结果来看，func函数中的this是以evnetBus.on() 挂载事件时上下文中的this为准的。







---
# node-community

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





topics GET请求获取的数据如下：

```
"id": "639ebb35f0ccae2b10e0fb64",
"author_id": "56f3686f02c237a73a1a8acf",
"tab": "share",
"content": "",
"title": "CNode - TG 频道",
"last_reply_at": "2023-01-22T16:14:33.589Z",
"good": false,
"top": true,
"reply_count": 1,
"visit_count": 191664,
"create_at": "2022-12-18T07:03:17.900Z",
"author": {
  "loginname": "thonatos",
  "avatar_url": "https://avatars.githubusercontent.com/u/958063?v=4&s=120"
}
```
