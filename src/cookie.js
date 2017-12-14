/**
 * 写入cookie
 * @param {string} name 
 * @param {string} value 
 * @param {num} expires 
 * @param {string} path 
 * @param {string} domain
 */
function fWriteCookie(name, value, expires, path, domain) {
  let cookie = []
  cookie.push(`name=${encodeURIComponent(name)}`)

  if (fIsNumber(expires)) {
    cookie.push(`expires=${new Date(expires).toGMTString()}`)
  }

  if (fIsString(path)) {
    cookie.push(`path=${path}`)
  }
  if (fIsString(domain)) {
    cookie.push(`domain=${domain}`)
  }
  if (fIsString(path)) {
    cookie.push(`path=${path}`)
  }

  document.cookie += cookie.join('; ')
}

/**
 * 读取cookie
 * @param {string} name 
 */
function fReadCookie(name) {
  let match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return (match ? decodeURIComponent(match[3]) : null);
}

/**
 * 删除cookie
 * @param {string} name 
 */
function fRemoveCookie(name) {
  fWriteCookie(name, '', Date.now() - 86400000);
}

/**
 * 检查是否为字符串
 * @param {elementType} str 
 * @return {boolean}
 */
function fIsString(str) {
  return typeof str === 'string'
}

/**
 * 检查是否为数字
 * @param {elementType} num
 * @return {boolean}
 */
function fIsNumber(num) {
  return typeof num === 'number'
}

exports.fReadCookie = fReadCookie
exports.fRemoveCookie = fRemoveCookie
exports.fWriteCookie = fWriteCookie