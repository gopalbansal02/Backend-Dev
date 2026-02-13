const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("Server is Running")
})
server.listen(8000,()=>{
    console.log("Server is Running on the port 8000")
})
const http=require("http");
const url=require("url");
const erver=http.createServer((req,res)=>{
    const parsedURL=url.parse(req.url,true);
    res.end("pathname: "+parsedURL.pathname);
});
server.listen(8000,()=>{
    console.log(`server is running on port http://localhost:8000`);
})