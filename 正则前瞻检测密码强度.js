// (?=)  前瞻运算符  不消耗字符
const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$@,_])[\da-zA-Z$@,_]{6,12}/
// console.log(reg.test('abc123A,'))
 
// [^/]  表示非 / 字符
var url ='https://szgsk.nbport.com.cn:9977/823893483'
const urlPattern = /(https?:\/\/[^/]*)/i
var result1=urlPattern.test(url);
console.log(result1, url.match(urlPattern))

// \2 表示匹配两次  以此类推
var str="344";
var regex=/^(3)(4)\2$/;
var result=regex.test(str);
console.log(result)