//*****some of executions of process global object*********************/
process.stdout.write("Hello World!" + "\n");//------------it prints helloworld------------------

console.log(process.execPath);//---------it executes the path----------

console.log('Current directory: ' + process.cwd());//---------it displays current working directory----------

console.log('Current version: ' + process.version);//----------------Current version of the process------------

console.log(process.memoryUsage());//memory usage
process.on('exit', function(code) {//--------------------this will never executes(unused)-------------
       setTimeout(function() {
          console.log("This will not run ever");
       }, 0);
      
       console.log('About to exit with code:', code);
    });
    console.log("Program Ended at last");