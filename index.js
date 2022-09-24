/*
 * @Author: TerryMin
 * @Date: 2022-09-23 15:23:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-23 15:34:20
 * @Description: file not
 */
const obj = {
  test: {
    inner: {
      body: {
        data: {
          arr: [
            1,
            {
              v: 2,
            },
          ],
          str: "test",
        },
      },
    },
  },
  lang: "中文",
  count: 2,
  obj: {
    id: 1,
    tags: ["member", "newUser", "diamond"],
    data: {
      key: "value",
      date: "2022-09-23 10:00:00.000",
      url: "http://www.baidu.com",
      special: "a&b&c",
    },
  },
};

const obj2 = {
  data: [1, { name: "Terrymin",sex:'男' }],
};
console.log(obj2.data);
console.log(obj2.data[1].name);
console.log(obj2.data[1].sex);
