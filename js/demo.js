let a = [{
    type: 'input',
    name: 'eventId',
    label: '事件类型ID',
    colSpan: 12
  }].map((item) => ({
          input: () => {
            return 1
          },
          select: () => {
            return 1
          },
    })[item.type]()
)
console.log(a)