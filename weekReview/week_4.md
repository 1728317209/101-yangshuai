# 本周回顾

## 数据扁平化
1、 为什么？ 

* 数据多层嵌套

* 查、改方便，便于维护

2、 normalize、 Schema

3、 扁平化规则：
* new Schema.Entity(' ', { }, { });
* 扁平化的规则对应接口数据

4、结合中间件
* 在SERVER_API中增加normalizeFuc调用normalize(data, Schema)

5、 数据结构怎么设计
* 重复实体复用

6、 reducer拆分
* switch嵌套
* ???

## 组件
1、组件拆分：
* 自治、复用、解耦

2、自治组件不用care：
* 样式
* DOM层级，外部注入组件

3、自治：
* 外部：数据、方法、evenHandler
* 内部：state

## 其他
1、拷贝: ...