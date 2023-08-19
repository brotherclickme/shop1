// type CurryId<A, R> = 
// A extends []? () => R 
// : A extends [infer AGE]? (param: AGE) => R 
// : A extends [infer AGE, ...infer REST]? (param: AGE) => CurryId<REST, R> : never

// function curry<A extends any[], R>(fn: (...args: A) => R) : CurryId<A, R>;
// function curry (fn: Function) {
//     return function tempFn(...args: any[]) {
//         if(args.length === fn.length) {
//             return fn.apply(fn, args);
//         } else {
//             return function (...args2: any[]) {
//                 return tempFn.apply(fn, args.concat(args2))
//             }
//         }
//     }
// }
// function sumAdd(a: string, b: number){
//     return a + b;
// }
// const currySum = curry(sumAdd);
// console.log(currySum('12')(9))
'use strict'
type Curried<A, R> = A extends []? () => R 
: A extends [infer AGE]? (param: AGE) => R
: A extends [infer AGE, ...infer REST]? (param: AGE) => Curried<REST, R> : never
declare function curry<A extends any[], R> (fn: (...args: A) => R) : Curried<A, R>
// function curry (fn: Function) {
//     return function tempFn (...args: any[]) {
//         if(fn.length === args.length) {
//             return fn.apply(fn, args)
//         } else {
//             return function (...args2: any[]) {
//                 return tempFn.apply(fn, args.concat(args2))
//             }
//         }
//     }
// }
function age() {
    return 123;
}
const curryFn = curry(age);
console.log(curryFn)