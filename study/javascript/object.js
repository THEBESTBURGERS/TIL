// Objects
// one of the JavaScript's data types.
// a colloection of related data and/or functionality.
// Neary all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax
function print(person){
    console.log(person.name);
    console.log(person.age);
}
const bokyoung = {name : 'bokyoung', age : '23'};
print(bokyoung);
// with JavaScript magic (dynamically typed language)
// can add properties later
bokyoung.hasJob = true;
console.log(bokyoung.hasJob);
// can delete properties later
delete bokyoung.hasJob;
console.log(bokyoung.hasJob);



// 2. Computed properties
// key should be always string
console.log(bokyoung.name);
console.log(bokyoung['name']);
bokyoung['hasJob'] = true;
console.log(bokyoung.hasJob)
function printValue(obj, key){
    console.log(obj[key]);
}
printValue(bokyoung, 'name');
printValue(bokyoung, 'age');



// 3. Property calue shorthand
const person1 = { name : 'bob', age : 2};
const person2 = { name : 'steve', age : 3};
const person3 = { name : 'dave', age : 4};
const person4 = new Person('bokyoung', 23);
console.log(person4);



// 4. Constructor Function
function Person(name,age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}



// 5. in operator : property existence check (key in obj)
console.log('name' in bokyoung);
console.log('age' in bokyoung);
console.log('random' in bokyoung);
console.log(bokyoung.random);



// 6. for..in vs for..of
// for (key in obj)
console.clear();
for(key in bokyoung){
    console.log(key);
}
// for (value in iterable)
const array = [1, 2, 4, 5];
for(value of array){
    console.log(value);
}



// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name : 'bokyoung', age : '23'};
const user2 = user;
console.log(user);
// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);
const user4 = Object.assign({}, user);
console.log(user4)
// anonther example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1,fruit2);
console.log(mixed.color);
console.log(mixed.size);