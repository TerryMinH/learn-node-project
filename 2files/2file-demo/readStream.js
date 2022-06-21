/*
 * @Author: TerryMin
 * @Date: 2022-05-31 10:52:45
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-31 14:29:21
 * @Description: file not
 */
const fs = require('fs')
 
let readStream = fs.createReadStream('./data/input.txt');
 
let count = 0;
let str = ""
readStream.on('data', data => {
    str += data;
    count++
})
 
readStream.on('end', () => {
    console.log("count:", count)
    console.log("str:", str)
})
 
readStream.on('error', err => {
    console.log(err)
})