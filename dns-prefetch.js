const fs = require('fs');
const path = require('path')
const {parse} = require('node-html-parser'); // 解析字符串  脱离浏览器 把字符串解析成节点
const {glob} = require('glob'); //一个库可以通过 (规则) 匹配相应的匹配结果
const urlRegex = require('url-regex');

const urlPattern = /(https?:\/\/[^/]*)/i
const urls = new Set()
// 编辑dist目录所有文件
async function searchDomain() {
    const files = await glob('dist/**/*.{js,css,html}');
    // console.log(files, '---');
    for(const file of files) {
        const source = fs.readFileSync(file, 'utf-8')
        const matchs = source.match(urlRegex({strict: true}))
        if(matchs) {
            matchs.forEach(url => {
                const match = url.match(urlPattern);
                if(match && match[1]){
                    urls.add(match[1])
                }
            })
        }
    }
}
async function insertLinks() {
    const files = await glob('dist/*.html');
    const link = [...urls].map(url => `<Link rel="dns-prefetch" href="${url}"/>`).join('\n');
    for(const file of files) {
        const html = fs.readFileSync(file, 'utf-8');
        const root = parse(html);  // 把字符串解析成节点
        const head = root.querySelector('head');
        // insertAdjacentHTML() 方法是将文本解析为 element 元素，并将结果节点插入到DOM树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接使用innerHTML操作更快。
        head.insertAdjacentHTML('afterbegin', '\n' + link); // 把生成的链接放到head 下面
        // 'beforebegin'：元素element自己的前面。
        // 'afterbegin'：插入到元素element里面的第一个子节点之前（也就是总是会插入到最前面，例如我插入5个节点，顺序是1、2、3、4、5，那么我就需要以5、4、3、2、1的顺序插入，有一种栈结构先进后出的感觉）。
        // 'beforeend'：插入元素element里面的最后一个子节点之后（这个比较容易理解，就是插入到最后一个节点后，例如我插入5个节点，顺序是1、2、3、4、5，那就正常的1、2、3、4、5就好啦，但是注意是在已有节点的后面哦）。
        // 'afterend'：元素element自己的后面。
        fs.writeFileSync(file, root.toString());
    }
}

async function main() {
    await searchDomain()
    await insertLinks()
}
main()