<!--
 * @Author: TerryMin
 * @Date: 2022-07-21 17:13:48
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-05-09 14:21:30
 * @Description: file not
-->

# nginx 访问本地资源配置

一 [nginx 配置代理及设置代理服务器](https://blog.csdn.net/weixin_37541878/article/details/112269109)

- http 结构下可以有多个 server,请求进来 确定 使用哪一个 server 由 server_name 确定.一个 server 下面可以有多个 location.

- Nginx location 用于匹配请求 URI，匹配上之后按照其定义的方式对该请求进行处理

1. location :一个 server 下可以有多个 location ，用来匹配 同一个域名下不同 uri 的访问.
2. location 中 index:

- 在前后端分离的基础上，通过 Nginx 配置，指定网站初始页。
- 该指令后面可以跟多个文件，用空格隔开;
- 如果包括多个文件，Nginx 会根据文件的枚举顺序来检查，直到查找的文件存在;
- 文件可以是相对路径也可以是绝对路径，绝对路径需要放在最后;
- 文件可以使用变量$来命名

3. location 中 root 与 alias:[location 配置规则详解](https://www.cnblogs.com/sunjiguang/p/6227518.html)

4. [proxy_pass](https://juejin.cn/post/7007053840419651592#heading-9)

- 属于 nginx_http_proxy_module 中的指令，用于设置代理



```js
worker_processes  1;

events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;
    server {
      listen   8001;
      server_name localhost;

      # 1. nginx 默认启动页面配置
      location / {
          root html;
          index index.html index.htm;
      }

      # 2. nginx通过指定前缀访问指定网站
      location /gateway/ {
          proxy_pass https://cn.bing.com/;
      }
    }

}
```
