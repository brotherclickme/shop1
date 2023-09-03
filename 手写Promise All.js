async function timeout(t) {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove(t)
        }, t)
    }).then(res => {
        return res
    })
}
const getData =  async function(t) {
    let a = await timeout(t)
    return a
}
async function get() {
    let [a, b] = await Promise.all([getData(3000), getData(2000)])
    console.log(a, b)
}


Promise.myAll =  function (prom) {
    let rej, res;
    const p = new Promise((resolve, reject) =>{
        rej = reject
        reso = resolve
    })
    let count = 0
    let result = []
    let success = 0
    let i = 0
    for  (const item of prom) {
        let index = i
        count++
        i++
        Promise.resolve(item).then((res) => {
            console.log(res)
            result[index] = res
            success++
            if(count === success){
                reso(result)
            }
        }, (error) => rej(error))
    }
    if(count === 0) res(result)
    return p

}

Promise.myAll([Promise.reject(9), getData(500), getData(300)]).then(res => {
    console.log(res, '0000')
}, error => {
    console.log(error)
})

// get()
Promise.all([getData(200), getData(300), Promise.reject(8)]).then(res => {
    console.log(res, '111')
}, error => {
    console.log(error)
})