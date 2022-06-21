<!--
 * @Author: TerryMin
 * @Date: 2022-05-31 09:09:32
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-31 11:16:53
 * @Description: file not
-->
# Fs文件操作

(fs基本使用)[https://blog.csdn.net/github_38140984/article/details/83006101]


# readFile与 createReadStream函数区别

readFile: 函数异步读取文件的全部内容，并存储在内存中，然后再传递给用户。
createReadStream: 使用一个可读的流，逐块读取文件，而不是全部存储在内存中。
与 readFile 相比，createReadStream 使用更少的内存和更快的速度来优化文件读取操作。如果文件相当大，用户不必等待很长时间直到读取整个内容，因为读取时会先向用户发送小块内容。

