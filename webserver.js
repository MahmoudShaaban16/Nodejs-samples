// require module

const http=require("http");
const config=require("./config.js");
http.createServer(function(req,res){
const url=require("url");
const path=url.parse(req.url);
const page=path.pathname.substring(1);
// read content of the page using fs
const fs=require("fs");
fs.readFile("./"+page,function(error,data){
if(error){
    // 500: internal server error
    res.writeHead(500); 
    res.write("an error occurred in reading the content of the file");
   //log the error
// send email to the administrator
}
else{
    // 200: ok status
    res.writeHead(200,{contentType:"text/html"});
    res.write(data);
    res.end();
}
});
    // no logic yet requests and responses

    // res.write("a response text from the server");
    // res.end();

    // runs on localhost  ---> host name --> computer name --> IP address

}).listen(config.portNumber,function(){

    console.log("my server is running on port:",config.portNumber)
});

