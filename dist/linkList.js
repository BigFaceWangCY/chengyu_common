'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkListNode = require('./linkListNode');
var isEqual = require('lodash.isequal');

/**
 * 链表类
 */

var LinkList = function () {
  /**
   * 初始化链表
   * @param {elementType} el
   */
  function LinkList() {
    _classCallCheck(this, LinkList);

    this.head = null;
    this.next = null;
    this.length = 0;
  }

  /**
   * 清空链表并返回是否成功
   * @return {boolean}
   */


  _createClass(LinkList, [{
    key: 'clear',
    value: function clear() {
      try {
        this.head = null;
        this.next = null;
        this.length = null;
        return true;
      } catch (error) {
        return false;
      }
    }

    /**
     * 将元素插入到链表尾部,并返回是否成功
     * @param {elementType} el
     */

  }, {
    key: 'append',
    value: function append(el) {
      try {
        var node = new LinkListNode(el);
        var temp = null;
        if (this.head === null) {
          this.head = node;
        } else {
          temp = this.head;
          while (temp.next) {
            temp = temp.next;
          }
          temp.next = node;
        }
        this.length++;
        return true;
      } catch (e) {
        return false;
      }
    }

    /**
     * 打印链表的字符串表示
     */

  }, {
    key: 'toString',
    value: function toString() {
      console.log('[Object LinkList]');
      return '[Object LinkList]';
    }

    /**
     * 删除指定位置的元素,返回是否删除成功
     * @param {number} pos
     * @return {boolean}
     */

  }, {
    key: 'delete',
    value: function _delete(pos) {
      if (pos > -1 && pos < this.length) {
        var current = this.head;
        var index = 0;
        var prev;
        if (pos === 0) {
          this.head = current.next;
        } else {
          while (index++ < pos) {
            prev = current;
            current = current.next;
          }
          prev.next = current.next;
        }
        this.length--;
        return true;
      } else {
        return false;
      }
    }

    /**
     * 向指定位置插入元素,返回是否成功
     * @param {elementType} el
     * @param {number} pos
     * @return {boolean}
     */

  }, {
    key: 'insert',
    value: function insert(el, pos) {
      if (pos > -1 && pos <= this.length) {
        var node = new LinkListNode(el);
        var current = this.head;
        var index = 0;
        var prev = void 0;
        if (pos === 0) {
          node.next = current;
          this.head = node;
        } else {
          while (index++ < pos) {
            prev = current;
            current = current.next;
          }
          prev.next = node;
          node.next = current;
        }
        this.length++;
        return true;
      } else {
        return false;
      }
    }

    /**
     * 返回链表的长度
     * @return {number}
     */

  }, {
    key: 'length',
    value: function length() {
      return this.length;
    }

    /**
     * 返回元素在链表中的位置
     * @param {elementType} el
     */

  }, {
    key: 'indexOf',
    value: function indexOf(el) {
      var current = this.head;
      var index = 0;
      while (current) {
        if (isEqual(el, current.element)) {
          return index;
        }
        index++;
        current = current.next;
      }
      return -1;
    }

    /**
     * 返回指定位置的元素的值
     * @param {number} pos
     * @return {elementType}
     */

  }, {
    key: 'getElement',
    value: function getElement(pos) {
      if (pos < 0 || pos >= this.length) {
        return null;
      } else {
        if (pos === 0) {
          return this.head.element;
        } else {
          var index = 1;
          var temp = this.head.next;
          while (index < pos) {
            temp = temp.next;
            index++;
          }
          return temp.element;
        }
      }
    }
  }]);

  return LinkList;
}();

module.exports = LinkList;