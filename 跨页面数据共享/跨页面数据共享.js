const channel = new BroadcastChannel('demo')
const sendMesg =  (changeInfo) => {
    channel.postMessage({
        data: changeInfo
    })
}
const listener =  (callback) => {
    channel.addEventListener('message', (e) => {
        callback(e.data)
    })
}