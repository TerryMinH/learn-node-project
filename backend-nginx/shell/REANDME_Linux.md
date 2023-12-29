<!--
 * @Author: TerryMin
 * @Date: 2023-06-05 17:44:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-07-27 10:45:43
 * @Description: file not
-->

# Linux

一 [Linux 命令大全](https://www.runoob.com/linux/linux-command-manual.html)

1. cp（copy file）命令主要用于复制文件或目录

```js
// 使用指令 cp 将当前目录 test/ 下的所有文件复制到新目录 newtest 下. -r/-R (递归：recursion)
cp –r test/ newtest
```

2. mkdir（make directory）命令用于创建目录

```js
// -p 确保目录名称存在，不存在的就建一个.确保不会报错
mkdir [-p] dirName
```

3. cat 拼接文本文件或标准输入，并输出到标准输出 [cat 用法](https://blog.csdn.net/weixin_41830716/article/details/106725464)

4. [shell 基础 grep、sed、awak 命令](https://www.cnblogs.com/tongye/p/9747560.html)文本处理命令:
   grep:查找整个文本文件
   sed(stream editor 流编辑器):可以用来在管道或者命令序列中编辑数据
   awk: