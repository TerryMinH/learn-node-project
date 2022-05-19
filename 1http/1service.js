/*
 * @Author: TerryMin
 * @Date: 2022-05-19 15:43:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-19 15:48:03
 * @Description: file not
 */
const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'utf-8' });
    res.end('hello world')
})
app.listen(host, () => {
    console.log(`启动端口:` + 'http://127.0.0.1:8080')
})