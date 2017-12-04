"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 双向队列类
 */

var OvonicQueue = function () {
  /**
   * 初始化
   * data 用于存储内容
   */
  function OvonicQueue() {
    _classCallCheck(this, OvonicQueue);

    this.data = [];
  }

  /**
   * 将元素放入队尾
   * @param {elementType} el
   * @return {boolean}
   */


  _createClass(OvonicQueue, [{
    key: "enqueueEnd",
    value: function enqueueEnd(el) {
      try {
        this.data.push(el);
        return true;
      } catch (error) {
        return false;
      }
    }

    /**
     * 将元素放入队首
     * @param {elementType} el
     * @return {boolean}
     */

  }, {
    key: "enqueueFront",
    value: function enqueueFront(el) {
      try {
        this.data.unshift(el);
        return true;
      } catch (error) {
        return false;
      }
    }

    /**
     * 从队首删除元素
     * @return {boolean}
     */

  }, {
    key: "dequeueFront",
    value: function dequeueFront() {
      try {
        this.data.shift();
        return true;
      } catch (error) {
        return false;
      }
    }

    /**
    * 从队尾删除元素
    * @return {boolean}
    */

  }, {
    key: "dequeueEnd",
    value: function dequeueEnd() {
      try {
        this.data.pop();
        return true;
      } catch (error) {
        return false;
      }
    }

    /**
     * 读取队首元素
     * @return {elementType}
     */

  }, {
    key: "front",
    value: function front() {
      return this.data.length > 0 ? this.data[0] : undefined;
    }

    /**
     * 读取队尾元素
     * @return {elementType}
     */

  }, {
    key: "back",
    value: function back() {
      return this.data.length > 0 ? this.data[this.data.length - 1] : undefined;
    }

    /**
     * 判断队列是否为空
     * @return {boolean}
     */

  }, {
    key: "empty",
    value: function empty() {
      return this.data.length === 0;
    }

    /**
     * 返回栈的字符串表示
     */

  }, {
    key: "toString",
    value: function toString() {
      console.log("[Ojbect ovonicQueue]");
      return "[Ojbect ovonicQueue]";
    }

    /**
     * 清空队列
     * @return {boolean}
     */

  }, {
    key: "clear",
    value: function clear() {
      try {
        this.data = [];
        return true;
      } catch (error) {
        return false;
      }
    }

    /**
     * 返回队列内元素个数
     */

  }, {
    key: "length",
    value: function length() {
      return this.data.length;
    }
  }]);

  return OvonicQueue;
}();

module.exports = OvonicQueue;