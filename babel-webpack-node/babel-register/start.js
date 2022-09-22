/*
 * @Author: TerryMin
 * @Date: 2022-09-22 15:08:23
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-22 16:00:14
 * @Description: file not
 */
require('@babel/register')({
    presets: ['@babel/preset-env']
  })
  
  module.exports = require('./build/webpack.base.config.js')
  