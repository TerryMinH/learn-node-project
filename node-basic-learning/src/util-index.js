/*
 * @Author: TerryMin
 * @Date: 2022-09-20 17:45:55
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-20 17:51:01
 * @Description: file not
 */
const fs = require("fs");
const util = require("util");

const handleReadFile = async () => {
  const readFile = util.promisify(fs.readFile);
  const buf = await readFile("../package.json");
  const obj = JSON.parse(buf.toString("utf8"));
  console.log(obj.name);
};
handleReadFile();