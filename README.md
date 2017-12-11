# vue-wap
一套VUE移动端架构，集成了移动端常用的组件

# 特点：

# 1.
集成了80%以上常用的移动端组件库，使用方式：比如button就可以直接<rkhy-button></rkhy-button>无须手动引用，详细参数配置请看packages里每个组件里的src

文件价里的.vue文件。详细示例请启动后到localhost:9018/test下面查看。

# 2.
对axios进行了二次封装，在请求接口时做了拦截，自动加载接口请求状态，比如正在加载的转菊花，以及接口报错自动弹出小弹框错误提示等

# 3.
移动端的rem单位初始化样式，比如设计稿上是文字大小是36px，可以直接使用font-size:rem(36);自动会把PX转成REM

# 4.
清晰的业务模块划分，便于管理和多人协做。所有的业务模块请放在router里，然后手动配置一下路由，路由配置最好用我写的示例，比如test组件就const test = r

=> require.ensure([], () => r(require('./test')))，这样可以使用webpack的分包加载

#5.
清晰的store架构，便于管理和多人协做。每个业务模块的状态管理都放在modules文件夹下面（一个业务模块对应一个文件），aticon类型都放在actionType文件夹下面

（一个业务模块对应一个），请求接口配置放在constants文件夹里（一个模块对应一个）

这里有两个components文件夹，建议外面的components文件夹放一些通用的业务组件，router下面的每个业务模块的components文件夹放当前业务模块自己使用业务组件

该架构可能需要有一定VUE开发基础的人才能理解。我里面有个test实例，可以作为参考，下载后npm install安装所有的类库，就可以启动
