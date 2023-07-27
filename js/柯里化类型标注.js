function curry(fn) {
  return function temp(...args) {
    if(args.length === fn.length){
      return  fn.call(fn, ...args)
    } else {
      return function(...args2) {
        return temp.call(fn, ...args, ...args2)
      }
    }
  }
}

function sum (a, b, c) {
  return a + b + c
}

const b = curry(sum)
console.log(b(45))