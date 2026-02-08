





const http=require("http");
const url=require("url");
const server=http.createServer((req,res)=>{
    const parsedURL=url.parse(req.url,true);
    res.end("pathname: "+parsedURL.pathname);
});
server.listen(8000,()=>{
    console.log(`server is running on port http://localhost:8000`);
})