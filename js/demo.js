let a = {
    type: 'input',
    name: 'eventId',
    label: '事件类型ID',
    colSpan: 12
  }
let b = {}
Object.defineProperty(b, 'c', {
  value: a
})
console.log(b.c)
