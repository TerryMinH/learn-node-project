<!--
 * @Author: TerryMin
 * @Date: 2022-06-20 15:34:07
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-22 11:05:30
 * @Description: file not
-->

# 模块化（ES6与Nodejs）
## 不同模块化基本使用 与相互转换使用

1. Nodejs模块化
- module.exports写起来比较复杂，Node提供了exports对象，默认情况下，exports和module.exports指向同一个对象，但最终暴露的结果，还是以module.exports指向的对象为准。(在同一个模块中同时使用exports和module.exports)
- exports 相当于 module.exports 的快捷方式:const exports = modules.exports;
```js
exports.test='a';
module.exports={
    'a':1,
    'b':2
}
```

2. Nodejs与ES6模块化使用方式区别
- [exports与module.exports](https://www.jianshu.com/p/da295cf76eea)


## 不同模块化之间区别

[ESM与CJS杂谈](https://juejin.cn/post/7048276970768957477)

[个人博客-模块化](https://www.cnblogs.com/terrymin/p/15740414.html)


## 不同模块化加载机制
1. Nodejs 模块化加载机制
- Node.js 中模块加载一般会经历 3 个步骤，路径分析、文件定位、编译执行

- 按照模块的分类，按照以下顺序进行优先加载：
  - 系统缓存：模块被执行之后会会进行缓存，首先是先进行缓存加载，判断缓存中是否有值。
  - 系统模块：也就是原生模块，这个优先级仅次于缓存加载，部分核心模块已经被编译成二进制，省略了 路径分析、文件定位，直接加载到了内存中，系统模块定义在 Node.js 源码的 lib 目录下，可以去查看。
  - 文件模块：优先加载 .、..、/ 开头的，如果文件没有加上扩展名，会依次按照 .js、.json、.node 进行扩展名补足尝试，那么在尝试的过程中也是以同步阻塞模式来判断文件是否存在，从性能优化的角度来看待，.json、.node最好还是加上文件的扩展名。
  - 目录做为模块：这种情况发生在文件模块加载过程中，也没有找到，但是发现是一个目录的情况，这个时候会将这个目录当作一个 包 来处理，Node 这块采用了 Commonjs 规范，先会在项目根目录查找 package.json 文件，取出文件中定义的 main 属性 ("main": "lib/hello.js") 描述的入口文件进行加载，也没加载到，则会抛出默认错误: Error: Cannot find module 'lib/hello.js'
  - node_modules 目录加载：对于系统模块、路径文件模块都找不到，Node.js 会从当前模块的父目录进行查找，直到系统的根目录

2. [ES6 模块化加载机制](https://blog.csdn.net/zl_best/article/details/77962686)
- 默认情况下，浏览器同步加载JavaScript脚本，即渲染引擎遇到 < script>标签就会停下来，等到脚本执行完毕再继续向下渲染。如果是外部脚本，还必须加入脚本下载的时间。(如果脚本体积很大就会“卡死”)
- < script>标签打开defer或async属性，脚本就会异步加载。defer是“渲染完再执行”，async是“下载完就执行”
- 浏览器加载ES6模块时也使用< script>标签，但是要加入type=”module”属性。对于带有type=”module”的< script>，浏览器都是异步加载的，不会造成浏览器堵塞，即等到整个页面渲染完再执行模块脚本





