const events =require("events");
const { EventEmitter } = require("stream");

var eventEmitter=new EventEmitter();

eventEmitter.on("log",function(log){

    console.log("msg:",log.msg);
    console.log("sender:",log.sender);
})
function log(msg){
    consoleWrite(msg);
}

function consoleWrite(msg){
    global.console.log(msg)
}


function logTofile(msg){
    // write the message to a file

    const fs=require("fs");
    fs.appendFile("./log.txt",msg+"\n",function(){



    });
}


module.exports={log,logTofile,eventEmitter};



