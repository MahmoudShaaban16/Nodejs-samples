const events=require("events");

const eventEmitter=new events.EventEmitter();

eventEmitter.on("error",function(){

    console.log("an error occurred");

})

eventEmitter.on("message",function(){

    console.log("a message received from the chatting module");

})

/// subscribe any number of events handler...


eventEmitter.emit("message");

eventEmitter.emit("error");

const logger=require("./logger.js");

logger.eventEmitter.emit("log",{msg:"a log sent from the events module",sender:"Mahmoud"});