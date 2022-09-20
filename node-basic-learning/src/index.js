/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:38:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-20 18:02:03
 * @Description: file not
 */
const fs = require("fs");
const path = require("path");
const util = require("util");

// 将目录解析成绝对路径
const resolvePath = (dir) => {
  // console.log(__dirname);
  return path.resolve(__dirname, dir);
};

// path API 测试
const handlePathApi = () => {
  /**
   * https://www.jb51.net/article/179721.htm
   * **/
  const _basename = path.basename("index.js", ".js"); // 返回路径的最后一个部分，即文件名。参数ext为需要截掉的后缀内容
  const _basenameHtml = path.basename("demo.html", ".html");

  const _dirPath = path.dirname("terrymin/test/index.js"); // 返回路径p所在的目录

  return {
    _basename,
    _basenameHtml,
    _dirPath,
  };
};

// File API 测试
const handleFileRead = () => {
  const bufSync = fs.readFileSync("./dataBase/test.txt");
  const dataSync = fs.readFileSync("./dataBase/test.txt", "utf8");

  // 异步
  fs.readFile("./dataBase/test.txt", "utf8", (err, data) => {
    console.log(err, data);
  });

  return {
    bufSync,
    dataSync,
  };
};

const handleFileWrite = () => {
  fs.writeFileSync("./dataBase/1.js", "const a='Hello world JavaScript!'");

  fs.writeFile("./dataBase/2.txt", "Hi Nodejs", (err) => {
    if (!err) {
      fs.readFile("./dataBase/2.txt", "utf8", (err, data) => {
        console.log(data);
      });
    }
  });
};

// --------------------------------------

const createWriteStream = async () => {
  const stats = await util.promisify(fs.stat)("dataBase");
  // console.log(stats);
  // console.log(stats.isDirectory());
  // console.log(stats.isFile());
};
// createWriteStream();

const readStream = () => {
  let readStream = fs.createReadStream("./dataBase/test.txt");

  let count = 0;
  let str = "";
  readStream.on("data", (data) => {
    str += data;
    count++;
  });

  readStream.on("end", () => {
    console.log("count:", count);
    console.log("str:", str);
  });

  readStream.on("error", (err) => {
    console.log(err);
  });
};
// readStream();

const writeStream = () => {
  let str = "";
  for (let i = 0; i < 500; i++) {
    str += "这是写入流输出的数据\n";
  }

  let writeStream = fs.createWriteStream("./dataBase/output.text");

  writeStream.write(str);
  writeStream.end();
  writeStream.on("finish", () => {
    console.log("写入完成");
  });
};
// writeStream();
// -----------------------------------------


