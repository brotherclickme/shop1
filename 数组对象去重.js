/***
 * 去重  对象数组
 * @param {arrList} 要去重的对象数组
 * @param {key} 根据对象中的那个字段去重
 * @example let people = [{name: '张三'， age: 50}, {name: '李四'， age: 49}, {name: '李四'， age: 49}] -> arrReduce(people, 'name')
 * @return {Array} 去重后的数组
 * */ 
  function arrReduce(arrList, key) {
    let newArr = {};
    let arr = arrList.reduce((pre, next) => {
      return newArr[next[key]] ? pre : (newArr[next[key]] = true && [...pre, next]);
    }, []);
    return arr;
  }
  /**
   * 数组去重
   * @param {arrList} 要去重的数组
   * @example [1,2,2,3] -> [1,2,3]
   * @return {Array} 去重后的数组
   * */ 
 function reduceArr(arrList) {
    console.log(arrList)
    let arr = arrList.reduce((pre, next) => {
      if(next.length > 0) pre.includes(next)? '' : pre.push(next)
      return pre
    }, []);
    return arr;
  }
  