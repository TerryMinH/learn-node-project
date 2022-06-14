/*
 * @Author: TerryMin
 * @Date: 2022-05-19 15:43:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-31 07:06:16
 * @Description: file not
 */
const process=require('process');

process.on('uncaughtException',function(err){
  console.log('Caught exception:'+err)
})

setTimeout(function(){
  console.log('This will still run')
},500);

nonexistentFunc();
console.log('This is not run ');


