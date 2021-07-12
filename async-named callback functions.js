console.log("1");

//call database
function doSomething(log){

    console.log('2: function is called');
    // read from the database.. example
    // the following timeout function is asynchronus block of code
    setTimeout(timeout,3000);

}

function timeout(){
    // anonymous function that simulates reading from the database
   log("3");

   // an error occurred

   
     
  }
// callback function sent as parameter works as event handler
doSomething(log);

 function log(logData){
    console.log(logData);
    console.log("4");

    // read from file ....

    // asynchronus

    //callBackFn(callBackFn);

}
