/**
 * 双向队列类
 */

class OvonicQueue {
  /**
   * 初始化
   * data 用于存储内容
   */
  constructor () {
    this.data = []
  }

  /**
   * 将元素放入队尾
   * @param {elementType} el
   * @return {boolean}
   */
  enqueueEnd (el) {
    try {
      this.data.push(el)
      return true
    } catch (error) {
      return false
    }
  }

  /**
   * 将元素放入队首
   * @param {elementType} el
   * @return {boolean}
   */
  enqueueFront (el) {
    try {
      this.data.unshift(el)
      return true
    } catch (error) {
      return false
    }
  }

  /**
   * 从队首删除元素
   * @return {boolean}
   */
  dequeueFront () {
    try {
      this.data.shift()
      return true
    } catch (error) {
      return false
    }
  }

    /**
   * 从队尾删除元素
   * @return {boolean}
   */
  dequeueEnd () {
    try {
      this.data.pop()
      return true
    } catch (error) {
      return false
    }
  }

  /**
   * 读取队首元素
   * @return {elementType}
   */
  front () {
    return this.data.length > 0 ? this.data[0] : undefined
  }

  /**
   * 读取队尾元素
   * @return {elementType}
   */
  back () {
    return this.data.length > 0 ? this.data[this.data.length - 1] : undefined
  }

  /**
   * 判断队列是否为空
   * @return {boolean}
   */
  empty () {
    return this.data.length === 0
  }

  /**
   * 返回栈的字符串表示
   */
  toString () {
    console.log(`[Ojbect ovonicQueue]`)
    return `[Ojbect ovonicQueue]`
  }

  /**
   * 清空队列
   * @return {boolean}
   */
  clear () {
    try {
      this.data = []
      return true
    } catch (error) {
      return false
    }
  }

  /**
   * 返回队列内元素个数
   */
  length () {
    return this.data.length
  }
}

module.exports = OvonicQueue
