<!--
 * @Author: TerryMin
 * @Date: 2022-09-22 15:18:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-24 14:28:24
 * @Description: file not
-->
# Babel
## babel基本概念

1. @babel/register 实现运行时即时编译来支持 ES6 的模块化语法.[babel-register使用](https://blog.csdn.net/weixin_44691608/article/details/111932754)
   - Node.js 的出现，大多数应用开始抛弃默认的浏览器环境，改成在 node 环境下开发，并透过 babel、webpack 等其他手段在部署上线的时候才编译打包成浏览器能解析的语法。

2. @babel/preset-env：使用预设环境，以支持 ES6 语法（可以设置编译结果需要的版本，通常直接引入就完事了，根据项目需要再另行配置）

3. @babel/core：babel 核心依赖


## babel运行过程
1. Babel 是一个编译器。从宏观角度看，它将运行代码分为3个阶段: 解析，转换，及生成（与其他编译器相同



## [babel运行原理](https://juejin.cn/post/6844903760603398151)




