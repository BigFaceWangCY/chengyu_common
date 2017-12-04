"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * LinkList的Node结点类
 */
var LinkListNode = function LinkListNode(el) {
  _classCallCheck(this, LinkListNode);

  this.element = el;
  this.next = null;
};

module.exports = LinkListNode;