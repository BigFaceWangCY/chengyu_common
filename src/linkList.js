const LinkListNode = require('./linkListNode')
const isEqual = require('lodash.isequal')

/**
 * 链表类
 */

class LinkList {
  /**
   * 初始化链表
   * @param {elementType} el
   */
  constructor () {
    this.head = null
    this.next = null
    this.length = 0
  }

  /**
   * 清空链表并返回是否成功
   * @return {boolean}
   */
  clear () {
    try {
      this.head = null
      this.next = null
      this.length = null
      return true
    } catch (error) {
      return false
    }
  }

  /**
   * 将元素插入到链表尾部,并返回是否成功
   * @param {elementType} el
   */
  append (el) {
    try {
      let node = new LinkListNode(el)
      let temp = null
      if (this.head === null) {
        this.head = node
      } else {
        temp = this.head
        while (temp.next) {
          temp = temp.next
        }
        temp.next = node
      }
      this.length ++
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * 打印链表的字符串表示
   */
  toString () {
    console.log(`[Object LinkList]`)
    return `[Object LinkList]`
  }

  /**
   * 删除指定位置的元素,返回是否删除成功
   * @param {number} pos
   * @return {boolean}
   */
  delete (pos) {
    if (pos > -1 && pos < this.length) {
      var current = this.head
      var index = 0
      var prev
      if (pos === 0) {
        this.head = current.next
      } else {
        while (index++ < pos) {
          prev = current
          current = current.next
        }
        prev.next = current.next
      }
      this.length--
      return true
    } else {
      return false
    }
  }

  /**
   * 向指定位置插入元素,返回是否成功
   * @param {elementType} el
   * @param {number} pos
   * @return {boolean}
   */
  insert (el, pos) {
    if (pos > -1 && pos <= this.length) {
      let node = new LinkListNode(el)
      let current = this.head
      var index = 0
      let prev
      if (pos === 0) {
        node.next = current
        this.head = node
      } else {
        while (index++ < pos) {
          prev = current
          current = current.next
        }
        prev.next = node
        node.next = current
      }
      this.length++
      return true
    } else {
      return false
    }
  }

  /**
   * 返回链表的长度
   * @return {number}
   */
  length () {
    return this.length
  }

  /**
   * 返回元素在链表中的位置
   * @param {elementType} el
   */
  indexOf (el) {
    let current = this.head
    let index = 0
    while (current) {
      if (isEqual(el, current.element)) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  /**
   * 返回指定位置的元素的值
   * @param {number} pos
   * @return {elementType}
   */
  getElement (pos) {
    if (pos < 0 || pos >= this.length) {
      return null
    } else {
      if (pos === 0) {
        return this.head.element
      } else {
        let index = 1
        let temp = this.head.next
        while (index < pos) {
          temp = temp.next
          index++
        }
        return temp.element
      }
    }
  }
}

module.exports = LinkList
