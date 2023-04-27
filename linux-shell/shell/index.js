/*
 * @Author: TerryMin
 * @Date: 2022-06-28 11:26:23
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-06-28 14:44:58
 * @Description: file not
 */
const fs=require('fs');
const jsonFile=require('./server.json');

// fs.readFile('./server.json','utf8',(err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data);
// })
console.log(jsonFile);
