/*
 * @Author: TerryMin
 * @Date: 2022-06-20 15:10:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-06-20 15:22:15
 * @Description: file not
 */
let age=18;
let sexObj={
  name:'张三',
  sex:'boy'
}
exports.setAge=function setAge(val){
  age=val
  // sexObj.name='李四'
};
exports.age=age;
exports.sexObj=sexObj;