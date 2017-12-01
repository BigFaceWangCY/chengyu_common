安装

```
npm install chengyu_common
```

然后在使用的地方引用即可

```
const tool = require('chengyu_common')
```

方法介绍


| 方法名        | 作用    |  参数  |   返回值 |
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
