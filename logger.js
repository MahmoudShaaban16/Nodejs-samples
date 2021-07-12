
function log(msg){
    consoleWrite(msg);
}

function consoleWrite(msg){
    global.console.log(msg)
}


function logTofile(msg){
    // write the message to a file
}


module.exports={log,logTofile};



