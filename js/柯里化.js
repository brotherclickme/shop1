// function curry (fn) {
//     return function tempFn(...args) {
//         if(args.length === fn.length) {
//             return fn.apply(fn, args);
//         } else {
//             return function (...args2) {
//                 return tempFn.apply(fn, args.concat(args2))
//             }
//         }
//     }
// }
// function sum(a, b, c) {
//     return a + b + c
// }
// const currySum = curry(sum);
// console.log(currySum(1)(2)(3))