
// We use mjs extension to leverage the ES module feature..
import * as fs from "fs";
import * as fileSystem from 'fs';

fileSystem.writeFile("./data2.txt","data from ES module import",function(){

    console.log("i have finished writing into the file");

    // send an email

   
});

fs.appendFile("./data.txt","this is a data new\n",function(){

    console.log("finished reading from the file");

    /// continue executing according to the required order
});

console.log("after writing to the file");

// reading from files:

fs.readFile("./data.txt",function(error,data){

    if(error){
        console.log(error);
    }
    else
    {
        console.log("Reading From File:",data);
    }

});

// reading from folders/ directories
console.log("Reading files inside the current directory:")
fs.readdir("./",function(error,files){

    if(error){
        console.log(error);
    }
    else
    {
        console.log(files);
    }

})

fs.rm("./data.tx",function(){
    console.log("file data.tx has been removed successfully");
})
// reading from folders/ directories
console.log("Reading files inside the current directory:")
fs.readdir("C:",function(error,files){

    if(error){
        console.log(error);
    }
    else
    {
        console.log(files);
    }

})


import * as logger from "./logger.js";
import {logTofile} from "./logger.js";

logger.logTofile("writing to the log here");
logTofile("msg 2");