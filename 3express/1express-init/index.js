/*
 * @Author: TerryMin
 * @Date: 2022-01-24 13:41:29
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-24 13:45:13
 * @Description: file not
 */
const express=require('express');
const app=express();
const port =3000;

app.get('/',(req,res)=>{
  res.send('Hello World!')
})

app.listen(port,()=>{
  console.log(`Example app is listening on http://127.0.0.1:${port}`)
})


