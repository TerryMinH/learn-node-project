/*
 * @Author: TerryMin
 * @Date: 2022-09-23 15:23:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-10-09 14:36:03
 * @Description: file not
 */
let obj = new Proxy(
  {},
  {
    get: (target, propKey, receiver) => {
      console.log(11, target, propKey, receiver);
      return Reflect.get(target, propKey, receiver);
    },
    set: (target, propKey, value, receiver) => {
      console.log(target, propKey, value, receiver);
      return Reflect.set(target, propKey, value, receiver);
    },
  }
);
// obj.count = 1;
// obj.name = "zhsan";
// obj.count++;
// ++obj.count;

const { a: aValue, b, c: cValue = 8 } = { a: 155, b: 2 };
console.log(aValue, b, cValue);
