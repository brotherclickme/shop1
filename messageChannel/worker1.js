self.onmessage = function(e) {
    const  port = e.ports[0];
    port.postMessage("this is from worker1") //woker1中通过port1发送给port2      
    port.onmessage = function(e) { 
        postMessage(e.data) //woker2中监听woker1中port1传递的数据，然后触发自身woker的监听函数
    }  
  }
  console.log(self, 'self')
  