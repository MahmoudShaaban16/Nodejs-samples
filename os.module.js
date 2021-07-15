const os=require("os");

console.log("Free memory:",os.freemem());
console.log("Total Memory:",os.totalmem());
console.log("CPUs",os.cpus());
console.log("OS Platform:",os.platform());
console.log("OS Release:",os.release());

