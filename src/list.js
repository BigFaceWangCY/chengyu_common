/**
 * 列表类
 */

 class List {
   /**
    * 初始化构造函数
    * listSize 列表长度
    * pos 元素当前位置
    * data 存储列表
    */
   constructor () {
     this.listSize = 0
     this.pos = 0
     this.data = []
   }

   /**
    * 返回列表的长度
    */
   length () {
     return this.listSize
   }

  /**
   * 清空列表
   * @return {boolean}
   */
   clear () {
     try {
       this.data = []
       this.listSize = 0
       this.pos = 0
       return true
     } catch (error) {
       return error
     }
   }

   /**
    * 返回列表的字符串形式
    */
   toString () {
     return `[Object List]`
   }

    /**
     * 返回当前位置的元素
     */
   getElement () {
     if (this.data.length === 0) {
       return null
     }
     return this.data[this.pos]
   }

   /**
    * 向指定位置插入元素
    * @param {anyType} el
    * @param {number} index
    * @return {boolean}
    */
   insert (el, index = 0) {
     try {
       this.data.splice(index, 0, el)
       this.listSize++
       return true
     } catch (error) {
       return false
     }
   }

    /**
     * 给列表添加元素
     * @param {anyType} el
     */
   append (el) {
     this.data[this.listSize++] = el
   }

   /**
    * 从列表中删除元素
    * @param {anyType} el
    * @return {boolean}
    */
   remove (el) {
     try {
       let index = this.find(el)
       while (index !== -1) {
         this.data.splice(index, 1)
         index = this.find(el)
       }
       return true
     } catch (error) {
       return false
     }
   }

   /**
    * 从列表中查找某一元素
    * @param {anyType} el
    */
   find (el) {
     for (var i = 0; i < this.data.length; i++) {
       if (this.data[i] === el) {
         return i
       }
     }
     return -1
   }

   /**
    * 回到第一个元素
    */
   front () {
     this.pos = 0
   }

   /**
    * 回到最后一个元素
    */
   end () {
     this.pos = this.listSize - 1
   }

  /**
   * 位置前进1
   */
   prev () {
     this.pos = this.pos === 0 ? 0 : this.pos - 1
   }

   /**
    * 位置后退1
    */
   next () {
     this.pos = this.pos === this.listSize - 1 ? this.pos : this.pos + 1
   }

   /**
    * 判断是否有下一个元素
    */
   hasNext () {
     return this.pos < this.listSize - 1
   }

   /**
    * 判断是否有前一个元素
    */
   hasPrev () {
     return this.pos > 0
   }

   /**
    * 返回当前位置
    */
   currPus () {
     return this.pos
   }

   /**
    * 去往指定位置
    * @param {number} val
    */
   moveTo (val) {
     try {
       if (val > -1 && val < this.data.length) {
         this.pos = val
         return true
       }
       return false
     } catch (error) {
       return false
     }
   }
 }

 module.exports = List
