/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:38:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-20 15:22:18
 * @Description: file not
 */
const fs = require("fs");
const path = require("path");

// 将目录解析成绝对路径
const resolvePath = (dir) => {
  return path.resolve(__dirname, dir);
};

console.log(__dirname);
let entryObj = {};
const getEntry = (dir) => {
  fs.readdirSync(dir)
    .filter((item) => {
      return path.extname(item) == ".js";
    })
    .map((item) => {
      const _name = path.basename(item, path.extname(item));
      entryObj[_name] = [path.join(dir, item)];
    });
  fs.writeFile();
};

console.log(resolvePath('webapp'));
