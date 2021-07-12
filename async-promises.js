const logger=require("./logger");
logger.log("1")

//call database
//async function
async function doSomething() {
    // resolve is callback function
    //reject is a callback

    logger.log('2: function is called');
    return new Promise((resolve, reject) => {


        // read from the database.. example
        // the following timeout function is asynchronus block of code
        setTimeout(function () {
            // anonymous function that simulates reading from the database
            resolve("3:reading from the database")


            // error scenarios
            //  var error= new Error(" connection failed with the database")
            //       reject(error);
        }, 3000);
    });



}
// callback function sent as parameter works as event handler
// doSomething().then(res => {
//     console.log(res);
//     console.log("4");

//     // read from file ....

//     // asynchronus functions

//     //callBackFn(callBackFn);
// }).catch(error => {
//     console.log(error);
// });
/// holds the string '3: reading from the database'
// acts lik synchrouns normal functions 

async function executeAsyncFunction ()  {

    var logData = await doSomething();
logger.log(logData);

logger.log("4");
};


executeAsyncFunction();


var x=10;

console.log(module);




