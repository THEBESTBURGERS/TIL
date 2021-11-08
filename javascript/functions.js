// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Funcion declaration
// funtion name (param1, param2){
//    body
//    return ;
// }
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoiing -> createCard, createPoint
// function is object in JS
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log("hello!");
log(1234)



// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by referance
function changeName(obj){
    obj.name = 'coder';
}
const bokyoung = { name : 'bokyoung' }
changeName(bokyoung)
console.log(bokyoung)



// 3. Default parameters (added in ES6)
function showMessate(message, from){
    console.log(`${message} by ${from}`);
}
showMessate('Hi');



// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i=0 ; i<args.length ; i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
    
}
printAll('dream', 'coding', 'kyoung2');



// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();



// 6. Return a value
function sum (a,b){
    return a+b;
}
console.log(`sum : ${sum(1, 2)}`);



// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}
// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...-
}



// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions/
// can be returned by another function



// 1. Function expression
// a function declaration can ve called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){ // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3))



// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    }
    else{
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log("yes!")
}
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log("no!")
}
randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)
// Arrow function
// always anonymous
// const simplePrint = function(){
//     console.log('simplePrint');
// }
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;

// IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();


function calculate(command, a, b){
    if(command == '+'){
        console.log(a+b);
    }
    else if(command == '-'){
        console.log(a-b);
    }
    else if(command == '/'){
        console.log(a/b);
    }
    else if(command == '*'){
        console.log(a*b);
    }
    else if(command == '%'){
        console.log(a%b);
    }
}

calculate('/', 3, 4)