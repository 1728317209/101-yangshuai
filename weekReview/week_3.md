# 本周回顾

## axios
1、基于promise用于浏览器和node.js的http客户端
* axios.post().then().catch()

2、两种请求：GET、POST
* 三个参数 method、url、params
* GET请求的params是写在url中的

3、promise(resolve、reject).then().catch()


## 中间件
1、什么是中间件
* 第三方，处理、过滤

2、创建中间件
* ？？？
* export default store => next => action {};

3、插入中间件
* 插到哪？ 创建store的地方
* 中间件的顺序

4、next和dispatch的区别

5、执行过程：
* ??? componentDidMount


## 路由
1、SPA：Single Page App

2、路由应该层级应该高于所有组件

3、配置路由：
* 两种方式：routes、标签
* path、component

4、路由跳转：
* Link
* browserHistory.push()
* router.push()

5、url传参
* 配置路由： path/：mid、path-:mid
* 跳转：
* 取参数：this.props.params.mid

## 数据扁平化
1、适用：[ {}, {}, {}, ... ]
2、索引：把唯一标识的key取出来，单独放在一个索引列表里。
