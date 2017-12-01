'use strict';

/**
 * [fIsWithData 检查参数是否不为空]
 * @method fIsWithData
 * @param  {[type]}    val [description]
 * @return {[boolean]}        [description]
 */
function fIsWithData(val) {
  if (val === undefined || val === null || val === '') {
    return false;
  } else {
    if (val.trim() === '') {
      return false;
    } else {
      return true;
    }
  }
}

/**
 * [fIsNull 检查参数是否为空]
 * @method fIsNull
 * @param  {[type]} val [description]
 * @return {[boolean]}     [description]
 */
function fIsNull(val) {
  if (val === undefined || val === null || val === '') {
    return true;
  } else {
    if (val.trim() === '') {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * [fFormatNumber 返回数字,len为小数位数,默认为4位,type为是否为负,默认可为负]
 * @method fFormatNumber
 * @param  {[type]}      val         [description]
 * @param  {Number}      [len=4]     [description]
 * @param  {Boolean}     [type=true] [description]
 * @return {[string]}                  [description]
 */
function fFormatNumber(val) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (fIsNull(val)) {
    return '';
  }
  val = parseFloat(val.toString());
  if (Object.is(val, NaN)) {
    return '';
  } else {
    if (val < 0 && type === false) {
      return '';
    } else {
      return Number(val.toFixed(len).toString().replace(/(\.?0*)$/, ''));
    }
  }
}

/**
 * [digitLength 返回整数的长度]
 * @method digitLength
 * @param  {[type]}    num [description]
 * @return {[number]}        [description]
 */
function digitLength(num) {
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}

/**
 * [fMul 安全乘法]
 * @method fMul
 * @param  {[type]} num1 [description]
 * @param  {[type]} num2 [description]
 * @return {[number]}      [description]
 */
function fMul(num1, num2) {
  var num1Changed = Number(num1.toString().replace('.', ''));
  var num2Changed = Number(num2.toString().replace('.', ''));
  var baseNum = digitLength(num1) + digitLength(num2);
  return num1Changed * num2Changed / Math.pow(10, baseNum);
}

/**
 * [fAdd 安全加法]
 * @method fAdd
 * @param  {[type]} num1 [description]
 * @param  {[type]} num2 [description]
 * @return {[number]}      [description]
 */
function fAdd(num1, num2) {
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (fMul(num1, baseNum) + fMul(num2, baseNum)) / baseNum;
}

/**
 * [fSub 安全减法]
 * @method fSub
 * @param  {[type]} num1 [description]
 * @param  {[type]} num2 [description]
 * @return {[number]}      [description]
 */
function fSub(num1, num2) {
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (fMul(num1, baseNum) - fMul(num2, baseNum)) / baseNum;
}

/**
 * [fDiv 安全除法]
 * @method fDiv
 * @param  {[type]} num1 [description]
 * @param  {[type]} num2 [description]
 * @return {[number]}      [description]
 */
function fDiv(num1, num2) {
  var num1Changed = Number(num1.toString().replace('.', ''));
  var num2Changed = Number(num2.toString().replace('.', ''));
  return fMul(num1Changed / num2Changed, Math.pow(10, digitLength(num2) - digitLength(num1)));
}

/**
 * [fGetUrlParamsByURL 拿到url参数]
 * @method fGetUrlParamsByURL
 * @param  {[string]}           url [description]
 * @return {[Object]}               [description]
 */
function fGetUrlParamsByURL(url) {
  var obj = {};
  if (fIsNull(url)) {
    return {};
  }
  try {
    var sUrl = url.split('?')[1];
    var arr = sUrl.split('&');
    for (var i in arr) {
      obj[arr[i].split('=')[0]] = arr[i].split('=')[1];
    }
    return obj;
  } catch (e) {
    return obj;
  }
}

/**
 * [fGetMonthFirstDay 获取某月第一天]
 * @method fGetMonthFirstDay
 * @param  {[number]}          year  [description]
 * @param  {[number]}          month [description]
 * @return {[Date]}                [description]
 */
function fGetMonthFirstDay(year, month) {
  var date = new Date(year, month - 1);
  date.setDate(1);
  return date;
}

/**
 * [fGetMonthLastDay 获得某月的最后一天]
 * @method fGetMonthLastDay
 * @param  {[number]}         year  [description]
 * @param  {[number]}         month [description]
 * @return {[Date]}               [description]
 */
function fGetMonthLastDay(year, month) {
  var newYear = year;
  var newMonth = month++;
  if (month > 12) {
    newMonth -= 12;
    newYear++;
  }
  var newDate = new Date(newYear, newMonth, 1);
  return new Date(newDate.getTime() - 1000 * 60 * 60 * 24);
}

/**
 * [fDateFormat 格式化日期]
 * @method fDateFormat
 * @param  {[string]}    fmt [description]
 * @param  {[Date]}    val [description]
 * @return {[string]}        [description]
 */
function fDateFormat(fmt, val) {
  if (fIsNull(val)) {
    return '';
  }
  var date = new Date(val);
  var o = {
    'M+': date.getMonth() + 1, // 月
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
  }
  return fmt;
}

/**
 * HTML字符转义编码,主要用于防止XSS攻击
 * @param {string} str
 * @return {string}
 */
function fHtmlTagSafeEncode(str) {
  var s = '';
  if (str.length === 0) return '';
  s = str.replace(/&/g, '&amp;');
  s = str.replace(/</g, '&lt;');
  s = str.replace(/>/g, '&gt;');
  s = str.replace(/ /g, '&nbsp;');
  s = str.replace(/'/g, '&#39;');
  s = str.replace(/"/g, '&#quot;');
  s = str.replace(/\n/g, '<br />>');
  return s;
}

/**
 * HTML字符转义解码,主要用于防止XSS攻击
 * @param {string} str
 * @return {string}
 */
function fHtmlTagSafeDecode(str) {
  var s = '';
  if (str.length === 0) return 0;
  s = str.replace(/&amp;/g, '&');
  s = str.replace(/&lt;/g, '<');
  s = str.replace(/&gt;/g, '>');
  s = str.replace(/&nbsp;/g, ' ');
  s = str.replace(/&#39;/g, '\'');
  s = str.replace(/&quot;/g, '"');
  s = str.replace(/[<br>|<br />];/g, '\n');
  return s;
}

exports.fIsWithData = fIsWithData;
exports.fIsNull = fIsNull;
exports.fFormatNumber = fFormatNumber;
exports.fMul = fMul;
exports.fDiv = fDiv;
exports.fAdd = fAdd;
exports.fSub = fSub;
exports.fGetMonthLastDay = fGetMonthLastDay;
exports.fGetMonthFirstDay = fGetMonthFirstDay;
exports.fGetUrlParamsByURL = fGetUrlParamsByURL;
exports.fDateFormat = fDateFormat;
exports.fHtmlTagSafeEncode = fHtmlTagSafeEncode;
exports.fHtmlTagSafeDecode = fHtmlTagSafeDecode;