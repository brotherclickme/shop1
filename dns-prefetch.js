const fs = require('fs');
const path = require('path')
const {parse} = require('node-html-parser'); // 解析字符串  脱离浏览器 把字符串解析成节点
const {glob} = require('glob'); //一个库可以通过 (规则) 匹配相应是匹配结果
const urlRegex = require('url-regex');

const urlPattern = /(https?:\/\/[^/]*)/i
const urls = new Set()
// 编辑dist目录所有文件
async function searchDomain() {
    const files = await glob('dist/**/*.(html,js,css)');
    for(const file of files) {
        const source = fs.readFileSync(file, '')
        const matchs = source.match(urlRegex({strict: true}))
        if(matchs) {
            matchs.forEach(item => {
                const match = url.match(urlPattern);
                if(match && match[1]){
                    urls.add(match[1])
                }
            })
        }
    }
}
async function insertLinks() {
    const files = await glob('dist/**/*.(html)');
    const link = [...urls].map(url => `<Link rel="dns-prefetch" href="${url}"`).join('\n');
    for(const file of files) {
        const html = fs.readFileSync(file, 'utf-8');
        const root = parse(html);  // 把字符串解析成节点
        const head = root.querySelecter('head');
        head.insertAdjacentHTML('afterbegin', link); // 把生成的链接放到head 下面
        fs.writeFileSync(file, root.toString());
    }


}

async function main() {
    await searchDomain()
    await insertLinks()
}
main()