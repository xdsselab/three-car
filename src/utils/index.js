import classnames from 'classnames'
import config from './config'
import menu from './menu'
import request from './request'
import { color } from './theme'

require('./mock.js')

// 'a-good-book' to 'aGoodBook'
String.prototype.hyphenToHump = function () {
  return this.replace(/-(\w)/g, function () {
    return arguments[1].toUpperCase()
  })
}

// 'aGoodBook' to 'a-good-book'
String.prototype.humpToHyphen = function () {
  return this.replace(/([A-Z])/g, '-$1').toLowerCase()
}

module.exports = {
  config,
  menu,
  request,
  color,
  classnames,
}
