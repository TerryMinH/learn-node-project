<!--
 * @Author: TerryMin
 * @Date: 2022-07-21 17:13:48
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-07-21 17:14:29
 * @Description: file not
-->
# nginx 访问本地资源配置

```
   server {
    listen   8001;
    server_name localhost;

    #  location /gateway/ {
    #     proxy_pass http://my_server/gateway/;
    #     proxy_set_header Host $host:$server_port;
    #  }
    #   location /gateway/ {
    #     proxy_pass http://36.155.98.130/gateway/;
    #   }
    
    location / {
      index index.html;
      root /Users/terrymin/Desktop/person-file/A_project-demo/node-demo/linux-shell/nginx-data/;
      autoindex on;
    }
   }
```



