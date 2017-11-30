// 检查参数是否不为空
function fIsWithData (val) {
  if (val === undefined || val === null || val === '') {
    return false
  } else {
    if (val.trim() === '') {
      return false
    } else {
      return true
    }
  }
}

// 检查参数是否为空
function fIsNull (val) {
  if (val === undefined || val === null || val === '') {
    return true
  } else {
    if (val.trim() === '') {
      return true
    } else {
      return false
    }
  }
}

// 返回数字,len为小数位数,默认为4位,type为是否为负,默认可为负
function fFormatNumber (val, len = 4, type = true) {
  if (fIsNull(val)) {
    return ''
  }
  val = parseFloat(val.toString())
  if (Object.is(val, NaN)) {
    return ''
  } else {
    if (val < 0 && type === false) {
      return ''
    } else {
      return Number(val.toFixed(len).toString().replace(/(\.?0*)$/, ''))
    }
  }
}

// 返回整数的长度
function digitLength (num) {
  const eSplit = num.toString().split(/[eE]/)
  const len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0)
  return len > 0 ? len : 0
}

// 乘法
function fMul (num1, num2) {
  const num1Changed = Number(num1.toString().replace('.', ''))
  const num2Changed = Number(num2.toString().replace('.', ''))
  const baseNum = digitLength(num1) + digitLength(num2)
  return num1Changed * num2Changed / Math.pow(10, baseNum)
}

// 加法
function fAdd (num1, num2) {
  const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)))
  return (fMul(num1, baseNum) + fMul(num2, baseNum)) / baseNum
}

// 减法
function fSub (num1, num2) {
  const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)))
  return (fMul(num1, baseNum) - fMul(num2, baseNum)) / baseNum
}

// 除法
function fDiv (num1, num2) {
  const num1Changed = Number(num1.toString().replace('.', ''))
  const num2Changed = Number(num2.toString().replace('.', ''))
  return fMul(num1Changed / num2Changed, Math.pow(10, digitLength(num2) - digitLength(num1)))
}

// 拿到url参数
function fGetUrlParamsByURL (url) {
  let obj = {}
  if (fIsNull(url)) {
    return {}
  }
  try{
    let sUrl = url.split('?')[1]
    let arr = sUrl.split('&')
    for (let i in arr) {
      obj[arr[i].split('=')[0]] = arr[i].split('=')[1]
    }
    return obj
  } catch(e) {
    return obj
  }

}

// 获得某月的第一天
function fGetMonthFirstDay (year, month) {
  let date = new Date(year, month - 1)
  date.setDate(1)
  return date
}

// 获得某月的最后一天
function fGetMonthLastDay (year, month) {
  let newYear = year
  let newMonth = month++
  if (month > 12) {
    newMonth -= 12
    newYear++
  }
  let newDate = new Date(newYear, newMonth, 1)
  return new Date(newDate.getTime() - 1000 * 60 * 60 * 24)
}

exports.fIsWithData = fIsWithData
exports.fIsNull = fIsNull
exports.fFormatNumber = fFormatNumber
exports.fMul = fMul
exports.fDiv = fDiv
exports.fAdd = fAdd
exports.fSub = fSub
exports.fGetMonthLastDay = fGetMonthLastDay
exports.fGetMonthFirstDay = fGetMonthFirstDay
exports.fGetUrlParamsByURL = fGetUrlParamsByURL
