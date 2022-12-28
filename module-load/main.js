/*
 * @Author: TerryMin
 * @Date: 2022-06-20 14:19:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-12-28 10:59:25
 * @Description: file not
 */
import { age, setAge, obj } from "./lib.js";
// const ageValue = age+1;
// console.log(ageValue, age);

const obj1 = obj;
obj1.num++;
console.log(obj1,obj);
