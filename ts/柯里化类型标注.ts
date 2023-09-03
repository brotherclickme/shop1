
type Curried<A, R> = A extends []? () => R 
: A extends [infer AGE]? (param: AGE) => R
: A extends [infer AGE, ...infer REST]? (param: AGE) => Curried<REST, R> : never
function curry<A extends any[], R>(fn: (...args: A) => R): Curried<A, R>
function curry(fn: Function) {
  return function tempFn(...args: any[]) {
    if(fn.length === args.length) {
      return fn.apply(fn, args)
    } else {
      return function (...args2: any[]) {
        return tempFn.apply(fn, args.concat(args2))
      }
    }
  }
}
function sum(a: number, b: string){
  return 123;
}

const currySum = curry(sum)
console.log(currySum(1))
