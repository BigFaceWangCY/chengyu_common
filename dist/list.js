"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 列表类
 */

var List = function () {
  /**
   * 初始化构造函数
   * listSize 列表长度
   * pos 元素当前位置
   * data 存储列表
   */
  function List() {
    _classCallCheck(this, List);

    this.listSize = 0;
    this.pos = 0;
    this.data = [];
  }

  /**
   * 返回列表的长度
   */


  _createClass(List, [{
    key: "length",
    value: function length() {
      return this.listSize;
    }

    /**
     * 清空列表
     * @return {boolean}
     */

  }, {
    key: "clear",
    value: function clear() {
      try {
        this.data = [];
        this.listSize = 0;
        this.pos = 0;
        return true;
      } catch (error) {
        return error;
      }
    }

    /**
     * 返回列表的字符串形式
     */

  }, {
    key: "toString",
    value: function toString() {
      return "[Object List]";
    }

    /**
     * 返回当前位置的元素
     */

  }, {
    key: "getElement",
    value: function getElement() {
      if (this.data.length === 0) {
        return null;
      }
      return this.data[this.pos];
    }

    /**
     * 向指定位置插入元素
     * @param {anyType} el
     * @param {number} index
     * @return {boolean}
     */

  }, {
    key: "insert",
    value: function insert(el) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      try {
        this.data.splice(index, 0, el);
        this.listSize++;
        return true;
      } catch (error) {
        return false;
      }
    }

    /**
     * 给列表添加元素
     * @param {anyType} el
     */

  }, {
    key: "append",
    value: function append(el) {
      this.data[this.listSize++] = el;
    }

    /**
     * 从列表中删除元素
     * @param {anyType} el
     * @return {boolean}
     */

  }, {
    key: "remove",
    value: function remove(el) {
      try {
        var index = this.find(el);
        while (index !== -1) {
          this.data.splice(index, 1);
          index = this.find(el);
        }
        return true;
      } catch (error) {
        return false;
      }
    }

    /**
     * 从列表中查找某一元素
     * @param {anyType} el
     */

  }, {
    key: "find",
    value: function find(el) {
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i] === el) {
          return i;
        }
      }
      return -1;
    }

    /**
     * 回到第一个元素
     */

  }, {
    key: "front",
    value: function front() {
      this.pos = 0;
    }

    /**
     * 回到最后一个元素
     */

  }, {
    key: "end",
    value: function end() {
      this.pos = this.listSize - 1;
    }

    /**
     * 位置前进1
     */

  }, {
    key: "prev",
    value: function prev() {
      this.pos = this.pos === 0 ? 0 : this.pos - 1;
    }

    /**
     * 位置后退1
     */

  }, {
    key: "next",
    value: function next() {
      this.pos = this.pos === this.listSize - 1 ? this.pos : this.pos + 1;
    }

    /**
     * 判断是否有下一个元素
     */

  }, {
    key: "hasNext",
    value: function hasNext() {
      return this.pos < this.listSize - 1;
    }

    /**
     * 判断是否有前一个元素
     */

  }, {
    key: "hasPrev",
    value: function hasPrev() {
      return this.pos > 0;
    }

    /**
     * 返回当前位置
     */

  }, {
    key: "currPus",
    value: function currPus() {
      return this.pos;
    }

    /**
     * 去往指定位置
     * @param {number} val
     */

  }, {
    key: "moveTo",
    value: function moveTo(val) {
      try {
        if (val > -1 && val < this.data.length) {
          this.pos = val;
          return true;
        }
        return false;
      } catch (error) {
        return false;
      }
    }
  }]);

  return List;
}();

module.exports = List;