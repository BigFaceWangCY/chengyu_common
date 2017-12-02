安装

```
npm install chengyu_common
```

然后在使用的地方引用即可

```
const tool = require('chengyu_common')
```

方法介绍


|    名        | 作用    |  参数  |   返回值 |
| ------------ | -----   | ----| ---------|
|fAdd|安全加法|Number,Number|Number|
|fSub|安全减法|Number,Number|Number|
|fMul|安全乘法|Number,Number|Number|
|fDiv|安全除法|Number,Number|Number|
|fIsWithData|检查传入参数是否有值|AnyType|Boolean|
|fIsNull|检查传入参数是否为空|AnyType|Boolean|
|fFormatNumber|格式化数字|Number,Number(小数位数,默认为4),Boolean(是否可为负,默认不可为负,true)|String|
|fGetUrlParamsByURL|获取URL参数|String|Object|
|fGetMonthFirstDay|获取某月第一天|Number,Number|Date Object|
|fGetMonthLastDay|获取某月最后一天|Number,Number|Date Object|
|fDateFormat|格式化日期|String,Date|String|
|fHtmlTagSafeEncode|HTML字符转义编码,主要用于防止XSS攻击|String|String|
|fHtmlTagSafeDecode|HTML字符转义解码,主要用于防止XSS攻击|String|String|
|List|列表类|null|Object|

列表类介绍
|名|作用|参数|返回值|
|length|返回列表的长度|void|number|
|clear|清空列表|void|boolean|
|toString|返回列表的字符串形式|void|string|
|getElement|返回当前位置的元素|void|elementType|
|insert|向指定位置插入元素|elementType,number|boolean|
|append|给列表添加元素|elementType|boolean|
|remove|从列表中删除元素|elementType|boolean|
|find|从列表中查找某一元素|elementType|boolean|
|front|回到第一个元素|void|void|
|end|回到最后一个元素|void|void|
|prev|位置前进1|void|void|
|next|位置后退1|void|void|
|hasNext|判断是否有下一个元素|void|boolean|
|hadPrev|判断是否有上一个元素|void|boolean|
|currPus|返回当前位置|void|number|
|moveTo|去往指定位置|number|boolean|
