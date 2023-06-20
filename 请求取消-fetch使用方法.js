let contrller = null;
async function request(){
    contrller && contrller.abort() //  取消请求
    contrller = new AbortController();
    const list = fetch(url, {
        signal: contrller.signal
    }).then((resp)=> resp.json());
}

/**
 * 1.1、fetch使用语法
 * @param {url} ：是发送网络请求的地址。
 * @param {options}：object 发送请求参数,
    body - http请求参数
    mode - 指定请求模式。默认值为cros:允许跨域;same-origin:只允许同源请求;no-cros:只限于get、post和head,并且只能使用有限的几个简单标头。
    cache - 用户指定缓存。
    method - 请求方法，默认GET
    signal - 用于取消 fetch
    headers - http请求头设置
    keepalive - 用于页面卸载时，告诉浏览器在后台保持连接，继续发送数据。
    credentials - cookie设置，默认omit，忽略不带cookie，same-origin同源请求带cookie，inclue无论跨域还是同源都会带cookie
   
 * */ 
 fetch(url,options).then((response)=>{
    //处理http响应
    },(error)=>{
    //处理错误
})
/**
 * // 1.2、response 对象
 * status - http状态码，范围在100-599之间
    statusText - 服务器返回状态文字描述
    ok - 返回布尔值，如果状态码2开头的，则true,反之false
    headers - 响应头
    body - 响应体。响应体内的数据，根据类型各自处理。
    type - 返回请求类型。
    redirected - 返回布尔值，表示是否发生过跳转。
*/

/**
 *  读取内容方法
 *  response 对象根据服务器返回的不同类型数据，提供了不同的读取方法。分别有：
 *  response.text() -- 得到文本字符串
    response.json() - 得到 json 对象
    response.blob() - 得到二进制 blob 对象
    response.formData() - 得到 fromData 表单对象
    response.arrayBuffer() - 得到二进制 arrayBuffer 对象

    stream 对象只能读取一次，读取完就没了，这意味着，上边的五种读取方法，只能使用一个，否则会报错。
    因此 response 对象提供了 clone() 方法，创建 respons 对象副本，实现多次读取。如下：将一张图片，读取两次：
    @eample response.clone()
    const response1 = await fetch('flowers.jpg');
    const response2 = response1.clone();

    const myBlob1 = await response1.blob();
    const myBlob2 = await response2.blob();

    image1.src = URL.createObjectURL(myBlob1);
    image2.src = URL.createObjectURL(myBlob2);
*/

/**
 * 1.5、response.body()
 * body 属性返回一个 ReadableStream 对象，供用户操作，可以用来分块读取内容，显示下载的进度就是其中一种应用。
 * response.body.getReader() 返回一个遍历器，这个遍历器 read() 方法每次都会返回一个对象，表示本次读取的内容块。
 * */ 
 const response = await fetch('flower.jpg');
 const reader = response.body.getReader();
 while(true) {
   const {done, value} = await reader.read();
   if (done) {
     break;
   }
   console.log(`Received ${value.length} bytes`)
 }


/**
 * 二、请求时 POST 和 GET 分别处理
 * */  
//  2.1、get 方式

//  只需要在url中加入传输数据，options中加入请求方式。如下面代码所示：
 
/**
 *  
<input type="text" id="user"><br>
 <input type="password" id="pas"><br>
 <button οnclick="login()">提交</button>
 <script>
  function login(){
   fetch(`http://localhost:80/fetch.html?user=${user.value}&pas=${pas.value}`,{
    method:'GET'
   }).then(response=>{
    console.log('响应',response)
   })
  }
 </script>
 * */ 


/**
 * 2.2、post 方式
使用 post 发送请求时，需要设置请求头、请求数据等。
将上个实例，改写成 post 方式提交数据，代码如下：

如果是提交json数据时，需要把json转换成字符串。如
body:JSON.stringify(json)
*/

fetch(`http://localhost:80/ES6练习题/53fetch.html`,{
 method:'POST',
 headers:{
  'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
 },
 body:`user=${user.value}&pas=${pas.value}`
 }).then(response=>{
  console.log('响应',response)
})

/**
如果提交的是表单数据，使用 formData转化下，如：
body:new FormData(form)
上传文件，可以包含在整个表单里一起提交，如：
 * */  

const input = document.querySelector('input[type="file"]');
const data = new FormData();
data.append('file', input.files[0]);
data.append('user', 'foo');

fetch('/avatars', {
  method: 'POST',
  body: data
});


/**
 * 上传二进制数据，将 bolb 或 arrayBuffer 数据放到body属性里，如：
 * */ 

 let blob = await new Promise(resolve =>   
    canvasElem.toBlob(resolve,  'image/png')
  );
  let response2 = await fetch('/article/fetch/post/image', {
    method:  'POST',
    body: blob
  });

//  将 canvas 图像转换为文件
 var canvas = document.getElementById("canvas");

 canvas.toBlob(function(blob) {
   var newImg = document.createElement("img"),
   url = URL.createObjectURL(blob);

   newImg.onload = function() {
     // no longer need to read the blob so it's revoked
     URL.revokeObjectURL(url);
   };
 
   newImg.src = url;
   document.body.appendChild(newImg);
 });
//  https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toBlob  -》  Canvas API
 
// 3.2、fetch默认不带cookie

// 传递cookie时，必须在header参数内加上 credentials:'include'，才会像 xhr 将当前cookie 带有请求中。

// 3.3、异常处理

// fetch 不同于 xhr ，xhr 自带取消、错误等方法，所以服务器返回 4xx 或 5xx 时，是不会抛出错误的，需要手动处理，通过 response 中的 status 字段来判断。