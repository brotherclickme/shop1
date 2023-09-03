function timeout(t) {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove()
        }, t)
    })
}
new Promise((reslove) => {
    timeout(3000).then(reslove).finally(() => {

    })
}).then(() => {
    console.log(8888)
})


class superTask {
    constructor(option) {
        this.task = []
        this.runCount = 0
        this.paralleCount = option
    }
    add(task) {
        return new Promise((resolve, reject) => {
            this.task.push({
                task, resolve, reject
            })
            this._run()
        })
    }
    _run () {
        while(this.task.length > 0 && this.runCount < this.paralleCount) {
            this.runCount++
            let {task, resolve, reject} = this.task.shift()
            task().then(resolve, reject).finally(() => {
                this.runCount--
                this._run()
            })
        }
    }
}

let temp = new superTask(4)

function addTask(time, count) {
    temp.add(() => timeout(time)).then(() => {
        console.log(`任务${count}完成`)
    })
}
addTask(5000, 1)
addTask(2000, 2)
addTask(3000, 3)
addTask(1000, 4)