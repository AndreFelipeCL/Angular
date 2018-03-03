var number = 5; //JS declaring way
let count = 5;  //TS declaring way

//JS For loop way
function doSomething(){
    for(var i=0; i <=number; i++){
        console.log("JS LOOP #" + i);
    }
    
    console.log("In JS we can access the iterable variable outside the local scope, Look: [i = " + i + "]");
    console.log("It's bad, isn't it? :'(");
}

//TS For loop way
function doSomethingRight(){
    for(let i=0; i <=number; i++){
        console.log("JS LOOP #" + i);
    }
    
    console.log("Now, we can not access local variables!!! :D");
    console.log("If we try to access it we will get an error, but still get the JS code.");
}


doSomething();
doSomethingRight();