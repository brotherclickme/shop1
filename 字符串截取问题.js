
// code Unit  码元  一个码元  8 * 2  16位   一个文字 16位
// code Point 码点  单位是码元
let str = '🐶🐷b🐻你好👅'
// str.length  -> 码元的个数
/**
 * Byte、KB、B、MB、GB之间的关系是：
Bit——比特
B ——字节
KB——千字节
MB——兆字节
GB——吉字节
TB——太字节
1B=8 Bit  ----   1KB＝1024B  ---   1MB = 1024KB  ---   1GB = 1024MB ...
 * */ 
/**
 * 
 * 获取字符串的码点数
 * */ 
String.prototype.pointLength = function () {
    let len = 0;
    for (let i = 0; i < this.length; ) {
        const codePoint = this.codePointAt(i);
        i += codePoint > 0xffff? 2 : 1;
        len++;
    }
    return len
}
/**
 * 获取字符串的字节数
 * */ 
String.prototype.byteLength = function () {
    let len = 0
    for(let i = 0; i < this.length; i++) {
        len += this.charCodeAt(i) > 128 ? 2 : 1;
    }
    return len
}
/**
 * 按码点获取对应的字符
 * */ 
String.prototype.pointAt = function (index) {
    let len = 0;
    for (let i = 0; i < this.length; ) {
        const codePoint = this.codePointAt(i);
        i += codePoint > 0xffff? 2 : 1;
        if(index === len) {
            return String.fromCodePoint(codePoint)
        }
        len++;
    }
}
String.prototype.sliceByPoint = function(start = 0, end = this.pointLength()) {
    let result = ''
    for(let i = 0; i < end; i++) {
        result += this.pointAt(i)
    }
    return result
}

// console.log(String.fromCodePoint(128069))
console.log(str.sliceByPoint(0,5))