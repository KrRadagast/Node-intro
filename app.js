const http=require("http");
const PORT=5000;
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"h"});
    res.write("hello this is a server");
    res.end();
})
.listen(PORT,()=>{
    console.log(`server is listening at the local host ${PORT} port`)
})