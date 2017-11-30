'use strict';

// 检查参数是否不为空
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

// 检查参数是否为空
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

// 返回数字,len为小数位数,默认为4位,type为是否为负,默认可为负
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

// 返回整数的长度
function digitLength(num) {
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}

// 乘法
function fMul(num1, num2) {
  var num1Changed = Number(num1.toString().replace('.', ''));
  var num2Changed = Number(num2.toString().replace('.', ''));
  var baseNum = digitLength(num1) + digitLength(num2);
  return num1Changed * num2Changed / Math.pow(10, baseNum);
}

// 加法
function fAdd(num1, num2) {
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (fMul(num1, baseNum) + fMul(num2, baseNum)) / baseNum;
}

// 减法
function fSub(num1, num2) {
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (fMul(num1, baseNum) - fMul(num2, baseNum)) / baseNum;
}

// 除法
function fDiv(num1, num2) {
  var num1Changed = Number(num1.toString().replace('.', ''));
  var num2Changed = Number(num2.toString().replace('.', ''));
  return fMul(num1Changed / num2Changed, Math.pow(10, digitLength(num2) - digitLength(num1)));
}

// 拿到url参数
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

// 获得某月的第一天
function fGetMonthFirstDay(year, month) {
  var date = new Date(year, month - 1);
  date.setDate(1);
  return date;
}

// 获得某月的最后一天
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

function fDateFormat(fmt, val) {
  if (fIsNull(val)) {
    return '';
  }
  var date = new Date(val);
  var o = {
    "M+": date.getMonth() + 1, // 月
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }return fmt;
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