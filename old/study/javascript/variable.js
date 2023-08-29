// 1. Use strict
// added ECMAScript 5 
// JavaScript is very flecible === dangerous
'use strict';


// 2. Variavle, rw(read/write)
// let(added in ES6)
let globalName = 'global name';
{
    let name = 'bokyoung';
    console.log(name);
    name = 'hello';
    console.log('Hello World');
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려 주는 것
// has no block scope
console.log(age);
age = 4;
console.log(age);
var age;


// 3. Contant, r(read only)
// use const whenever possible.
// only use let if variable needs to changes.
const daysInweek = 7;
const maxNumber = 5;

// Note!
// 1. Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// 2. Mutable data types : all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes


// 4. Variable types
// primitive, single item : number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function

const count = 17;   // integer
const size = 17.1;  // decimal number
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

// number - speicla numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const breadan = 'breadan';
const greeting = 'hello' + breadan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const hellobob = `hi ${breadan}!`; // template literals (string)
console.log(`value : ${hellobob}, type : ${typeof breadan}`);
console.log('value : ' + hellobob  +  'type : ' + typeof breadan);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

// null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefined
let x = undefined;
console.log(`value : ${x}, type : ${typeof x}`);

// sysbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// console.log(`value : ${symbol1}, type : ${typeof symbol1}`); error 
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);

// object, real-life object, data structure
const bokyoung = {name : 'kyoungE', age : 20};
bokyoung.age = 21;

// 5. Dynamic typing : dynamically typed language
// statically typed language : C, Java
// dynamically typed language : Python, PHP, JS
let text = 'hello';
console.log(text.charAt(0));
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);
