// (?=)  前瞻运算符  不消耗字符
const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$@,_])[\da-zA-Z$@,_]{6,12}/
console.log(reg.test('abc123A,'))