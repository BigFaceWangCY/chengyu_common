/**
 * 栈类
 */

class Stack {
  /**
   * 初始化栈
   * top 栈顶位置
   * data 用于存储数据的数组
   */
  constructor () {
    this.data = []
    this.top = 0
  }

  /**
   * 将元素压入栈
   * @param {anyType} el
   */
  push (el) {
    try {
      this.data[this.top++] = el
      return true
    } catch (error) {
      return false
    }
  }

  /**
   * 返回栈的字符串表示
   */
  toString () {
    console.log(`[Ojbect Stack]`)
    return `[Ojbect Stack]`
  }

  /**
   * 取栈顶元素
   */
  peek () {
    return this.data[this.top - 1]
  }

  /**
   * 将栈顶元素推出栈并返回
   * @return {elementType} el
   */
  pop () {
    return this.data[--this.top]
  }

  /**
   * 清空栈
   * @return {boolean}
   */
  clear () {
    try {
      this.top = 0
      return true
    } catch (error) {
      return false
    }
  }

  /**
   * 返回栈内元素个数
   */
  length () {
    return this.top
  }
}

module.exports = Stack
