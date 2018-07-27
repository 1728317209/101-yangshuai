# 本周回顾

## 组件拆分
1、 为什么拆？
* 复用
* 降低复杂度

2、 拆成什么样？
* 高内聚
* 低耦合

3、方法？
* 从上往下、从下往上 结合，直到组件可以自治。

## redux
1、为什么用redux?
* react遗留问题：子组件的请求一级一级回调。

2、redux
* store：存储数据（state）
* action：actionType、参数
* dispatch：传递action到reducer
* reducer：先拷贝一份state，根据actionType进行不同操作，将修改后的state返回store

3、两个map
* mapStateToProps(state)
* mapDispatchToProps(dispatch)

4、连接store
* connect(mapStateToProps, mapDispatchToProps)(Container)
* ...注入到Container中
* 只连接一次

5、reducer拆分与组合
* combineReducers()
* 根据action的类型，将reducer分成多个。eg：UI、操作message
* 拆分以后耦合问题？？？

6、action拆分与组合
* 拆分：与reducer拆分对应。
* 组合：将所有action导入组合成actions，再通过bindActionCreators(actions, dispatch)函数，将actions和dispatch包装在一起。调用action函数时，自动dispatch。

