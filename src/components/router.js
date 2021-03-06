// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from 'vue-router';
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import List from './List';
import New from './New';
import WatchRoute from './watch-route';
import Node from './node';
import One from './1';
import Two from './2';
import Three from './3';
import EChart from './echart';

Vue.use(VueRouter);
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/list', component: List, name: "List" },
  { path: '/new', component: New, name: "New" },
  {
    path: '/WatchRoute', component: WatchRoute, name: "WatchRoute", children: [
      {
        path: '/WatchRoute/1', component: One, name: "New1"
      },
      {
        path: '/WatchRoute/2', component: Two, name: "New2"
      },
      {
        path: '/WatchRoute/3', component: Three, name: "New3"
      }
    ]
  },
  { path: '/node', component: Node, name: 'Node' },
  { path: '/echart', component: EChart, name: "EChart" },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
export default router;

// 现在，应用已经启动了！
