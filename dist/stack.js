"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 栈类
 */

var Stack = function () {
  /**
   * 初始化栈
   * top 栈顶位置
   * data 用于存储数据的数组
   */
  function Stack() {
    _classCallCheck(this, Stack);

    this.data = [];
    this.top = 0;
  }

  /**
   * 将元素压入栈
   * @param {anyType} el
   */


  _createClass(Stack, [{
    key: "push",
    value: function push(el) {
      try {
        this.data[this.top++] = el;
        return true;
      } catch (error) {
        return false;
      }
    }

    /**
     * 返回栈的字符串表示
     */

  }, {
    key: "toString",
    value: function toString() {
      console.log("[Ojbect Stack]");
      return "[Ojbect Stack]";
    }

    /**
     * 取栈顶元素
     */

  }, {
    key: "peek",
    value: function peek() {
      return this.data[this.top - 1];
    }

    /**
     * 将栈顶元素推出栈并返回
     * @return {elementType} el
     */

  }, {
    key: "pop",
    value: function pop() {
      return this.data[--this.top];
    }

    /**
     * 清空栈
     * @return {boolean}
     */

  }, {
    key: "clear",
    value: function clear() {
      try {
        this.top = 0;
        return true;
      } catch (error) {
        return false;
      }
    }

    /**
     * 返回栈内元素个数
     */

  }, {
    key: "length",
    value: function length() {
      return this.top;
    }
  }]);

  return Stack;
}();

module.exports = Stack;