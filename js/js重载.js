var arr = [1,2,3,4,5];
//注意:这里不能写成箭头函数，否则this指向的是window对象
Array.prototype.search = function() {
   var len = arguments.length;
   switch(len){
   case 0:
	 return this;
   case 1:
	 return `${arguments[0]}`;
   case 2:
	 return `${arguments[0]},${arguments[1]}`;
  }
}
// console.log(arr.search()) //[1,2,3,4,5]
// console.log(arr.search(1)) //1
// console.log(arr.search(3,2)) //1,2

function addMethon(obj, name, fn) {
    let old = obj[name]
    console.log(fn.length, 'fn')
    obj[name] = function () {
        console.log(fn.length, arguments.length, '9999')
        if(fn.length === arguments.length) {
            console.log(111)
            return fn.apply(this, arguments)
        } else if(typeof old === 'function') {
            console.log(2222, old)
            return old.apply(this, arguments)
        }
    }
}
var person = {name: 'zhangsan'}

addMethon(person, 'geName', function () {
    console.log(this.name, '0000')
})
addMethon(person, 'geName', function (str) {
    console.log(str, 'str')
})
addMethon(person, 'geName', function (age, age2) {
    console.log(age, age2, 'age')
})
// person.geName()
person.geName(2, 3)
// person.geName(2)