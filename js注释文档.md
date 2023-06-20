JavaScript文档注释JSDoc注释

/**
* 普通的多行注释
*/
使用JsDoc
JSDoc 是一个根据 JavaScript 文件中注释信息，生成 JavaScript 应用程序或模块的API文档的工具。你可以使用 JSDoc 标记如：命名空间，类，方法，方法参数等。从而使开发者能够轻易地阅读代码，掌握代码定义的类和其属性和方法，从而降低维护成本，和提高开发效率。

它必须以/ **开始，以便由JSDoc解析器识别。其他任何以 /* ， /*** 或者超过3个星号的注释，都将被JSDoc解析器忽略。

### @param 参数注释
用@param来表示函数、类的方法的参数，@param是JSDoc中最常用的注释标签。参数标签可表示一个参数的参数名、参数类型和参数描述的注释。如下所示：
```js
/**
* @param {String} wording 需要说的句子
*/
function qiao(wording){
    console.log(wording);
}
```
### @return 返回值注释
@return表示一个函数的返回值，如果函数没有显示指定返回值可不写。如下所示：
```js
/*
* @return {Number} 返回值描述
*/

```
### @example 示例注释
@example通常用于表示示例代码,通常示例的代码会另起一行编写，如下所示：
```js
/*
* @example
* multiply(3, 2);
*/
```
### @author 代码的作者信息

@author标识项目的作者。在jsdoc3.2和更高版本中，如果作者的名字后面跟一个用尖括号括起来的电子邮件地址，默认模板会将电子邮件地址转换为mailto:链接。
```js
/**
 * @author Jane Smith <change@change.com>
 */
function MyClass() {}
```
### @version当前代码的版本

记录项的版本。@version标记后面的文本将用于表示项的版本。
```js
/**
 * Solves equations of the form a * x = b. Returns the value
 * of x.
 * @version 1.2.3
 * @tutorial solver
 */
function solver(a, b) {
    return b / a;
}
```
### @file对当前代码文件的描述

@file标记提供文件的描述。在文件开头的JSDoc注释中使用标记。
```js
/**
 * @file Manages the configuration settings for the widget.
 * @author Rowina Sanela 
 */
```
### @copyright代码的版权信息

@copyright标记用于在文件概述注释中记录版权信息。将此标记与@file标记结合使用。
```js
/**
 * @file 描述
 * @copyright 名字时间
 */
```