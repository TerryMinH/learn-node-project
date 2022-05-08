/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:37:53
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-08 08:54:57
 * @Description: file not
 */
const http = require('http');
const fs = require('fs');

const app = http.createServer(function(req, res) {
    if (req.url === '/favicon.ico') {
        res.writeHead(200);
        res.end();
        return;
    }
    res.writeHead(200);
    // res.end('Helllo world!')
    fs.createReadStream(__dirname + '/index.html').pipe(res);
});
app.listen(8004, () => {
    console.log('http://localhost:8004')
})