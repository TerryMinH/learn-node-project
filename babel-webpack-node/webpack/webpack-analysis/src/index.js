/*
 * @Author: TerryMin
 * @Date: 2021-03-12 14:46:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-02-12 13:48:32
 * @Description: file not
 */

// 管理输出
import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component () {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  element.classList.add('hello');
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
