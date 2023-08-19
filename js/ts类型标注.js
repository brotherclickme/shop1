"use strict";
// type curryId<A, R> = 
// A extends []? () => R 
// : A extends [infer AGE]? () => AGE 
// : A extends [infer AGE, ...infer REST]? (param: AGE) => curryId<REST, AGE> : never
// function curry<A extends any[], R>(fn: (...args: A) => R) : curryId<A, R>;
function curry(fn) {
    return function tempFn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === fn.length) {
            return fn.apply(fn, args);
        }
        else {
            return function () {
                var args2 = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args2[_i] = arguments[_i];
                }
                return tempFn.apply(fn, args.concat(args2));
            };
        }
    };
}
function sumAdd(a, b) {
    return a + b;
}
var currySum = curry(sumAdd);
console.log(currySum('12')(4));
