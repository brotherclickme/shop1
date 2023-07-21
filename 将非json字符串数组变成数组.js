let carList = "[{carNumber:ABM022,workType:\"\",time:201},nihao| {carNumber:辽HL6634,workType:\"\",time:200}, {carNumber:辽AEC276,workType:\"\",time:259}, {carNumber:辽ADF835,workType:\"\",time:233}, {carNumber:辽ADN901,workType:\"\",time:385}, {carNumber:辽ABS453,workType:\"\",time:222}, {carNumber:吉AW7512,workType:\"\",time:245}, {carNumber:吉BG3106,workType:\"\",time:220}, {carNumber:辽HL2653,workType:\"\",time:232}, {carNumber:辽ACK571,workType:\"\",time:124}, {carNumber:辽ABM050,workType:\"\",time:190}, {carNumber:吉AV8739,workType:\"\",time:247}, {carNumber:辽ABS412,workType:\"\",time:100}, {carNumber:吉BE6679,workType:\"\",time:179}, {carNumber:吉AW1926,workType:\"\",time:241}, {carNumber:辽ADT117,workType:\"\",time:230}, {carNumber:辽ABM921,workType:\"\",time:223}, {carNumber:辽ABL020,workType:\"\",time:82}, {carNumber:吉BE8950,workType:\"\",time:373}, {carNumber:吉BG5278,workType:\"\",time:187}, {carNumber:赣H83573,workType:\"\",time:185}, {carNumber:辽ACH766,workType:\"\",time:103}, {carNumber:辽ABM722,workType:\"\",time:221}, {carNumber:沪EK5699,workType:\"\",time:579}]"
let a = setStringArr(carList, ['carNumber', 'workType', 'time'])


// 我们经常会遇到想找出不包含某个字符串的文本，比如我要匹配不含有20211229 和 20211230的字符串。

// 正则表达式中有(?=a)和(?!a)来表示我们是否需要匹配某个东西。

// 所以，有需要不匹配某样内容时，就可以用(?!a)了。比如要匹配不含20211229的字符串就可以这样写。

// /^(?!.*20211229)/
// 具体说明一下：

// 这里.*用来表示20211229之前可能有其他的字符，为什么还要加^呢，因为如果不加的话，可能匹配到2之后的这个位置上了。

// 本次需求的解决代码如下

// /^(?!.*(20211229)|(20211230))/
/**
 * 将非json字符串数组变成数组
 * @param {str} 非json字符串数组
 * @param {keyArr} 对象key值
 * */ 
function setStringArr(str, keyArr) {
    const reg = new RegExp(`(${keyArr.join('|')})`,"g")
    return str.replace(/('|")/g, '').replace(reg, (item) => {
        return `"${item}"`
    }).replace(/:+[^,^}]*/g, (item) => {
        // return  ':' + '"' + item.replace(/:/, '') + '"'
        return `:"${item.replace(/:/, '')}"`
    })
    // .replace(/\"\d+\"/g, (reg, (item) => { // 将
    //     return item.replace(/\"/g, '')
    // }))
}
console.log(a)