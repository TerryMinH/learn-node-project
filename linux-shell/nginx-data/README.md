<!--
 * @Author: TerryMin
 * @Date: 2022-07-21 17:13:48
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-04-26 19:05:01
 * @Description: file not
-->

# nginx 访问本地资源配置

一 [nginx 配置代理及设置代理服务器](https://blog.csdn.net/weixin_37541878/article/details/112269109)

- http 结构下可以有多个 server,请求进来 确定 使用哪一个 server 由 server_name 确定.
- location :一个 server 下可以有多个 location ，用来匹配 同一个域名下不同 uri 的访问.

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

