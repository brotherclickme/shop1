/**
 * 函数防抖使用前期
 * 1、频繁的调用某一个函数
 * 2、造成效率问题
 * 3、需要的结果以最后一次的结果为准
 * */ 

function debounce(func, time = 500 ) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args);
        }, 500)
    }
}

function layout(...b) {
  console.log(b)
}
console.log(arr1)

let a = debounce(layout, 500)

 a(1,2,3,4,5)


/**
 * Apply，Call方法
 * apply(this, [参数])
 * call(this, 参数, 参数, 参数...)
 * */  
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Array.prototype.push.apply(arr1, arr2);
Array.prototype.push.call(arr1, ...arr2);

/**
 * 
 * Bind方法
 * bind同样可以改变this的指向，但和apply、call不同的是，bind() 方法返回一个新的函数，这个新函数的 this 被指定为 bind() 的第一个参数，其余参数将作为新函数的参数使用。
 * 注意，不论怎么调用，这个新函数都有同样的 this 值。
 * 
 * */ 
let sayStudent2 = student1.say.bind(student2);
sayStudent2();	//	My name is 李四