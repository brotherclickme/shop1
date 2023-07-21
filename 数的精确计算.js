let a = '122.980000000000000008'
let b = '122.870000000000000009'
function autoBu0(x, y) {
   return Math.max(x.length, y.length)
}

function getNum(start, next) {
   let tempStart = start.toString()
   let tempNext = next.toString()
   let [x1, y1] = tempStart.split('.')
   let [x2, y2] = tempNext.split('.')
   let x = autoBu0(x1, x2) 
   let y = autoBu0(y1, y2)
   tempStart = x1.padStart(x, '0') + '.' + y1.padEnd(y, '0')
   tempNext = x2.padStart(x, '0') + '.' + y2.padEnd(y, '0')
   return {
    tempA: tempStart, tempB : tempNext
   }
}
function operation(a, b) {
    let {tempA, tempB} = getNum(a, b)
    let borrowOne = false
    let symbol = tempA >= tempB
    let value = []
    let start = ''
    let next = ''
    if(symbol) (start = tempA, next = tempB); else (start = tempB, next = tempA)
    for(let i = start.length - 1; i >= 0; i--){
        if(start[i] === '.')  value.unshift(start[i])
        else {
            let flag = false
            let tempStart = borrowOne? start[i] - 1 : start[i]
            if(tempStart < 0){ borrowOne = true; tempStart = 9; flag = true} else {flag = false}
            let temp =  tempStart >= next[i] ? tempStart - next[i] : 10 - (next[i] - tempStart);
            if(tempStart >= next[i] && !flag) borrowOne = false 
            else borrowOne = true 
            value.unshift(temp)
        }
    }
    let l = value.findIndex((item) => item !== 0 || item === '.')
    let p = value.splice(0, l - 1)
    value =  value.reverse()
    l = value.findIndex((item) => item !== 0 || item === '.')
    p = value.splice(0, l)
    value =  value.reverse()
    return symbol? value.join('') :  '-' + value.join('')
}
let  x = operation(a, b)
console.log(typeof x)