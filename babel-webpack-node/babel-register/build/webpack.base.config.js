/*
 * @Author: TerryMin
 * @Date: 2022-09-22 15:24:04
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-22 16:03:17
 * @Description: file not
 */
import fs from "fs";
import path from "path";
import webpack from "webpack";

const resolvePath = (dir) => {
  return path.resolve(__dirname, dir);
};

// 定义全局环境变量
const define = () => {
  return new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  });
};

export { resolvePath, define };
