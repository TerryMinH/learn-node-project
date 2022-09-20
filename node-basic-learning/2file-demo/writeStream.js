/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:37:53
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-31 10:41:32
 * @Description: file not
 */
const fs=require('fs');

let str="";
for(let i=0;i<500;i++){
  str+='这是写入流输出的数据\n'
}

let writeStream=fs.createWriteStream('./data/output.text');

writeStream.write(str);
writeStream.end();
writeStream.on('finish',()=>{
  console.log('写入完成');
  
})