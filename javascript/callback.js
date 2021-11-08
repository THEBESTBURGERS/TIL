'use strict';

// JavaScript is synchronous.(동기적)
// Execute the code block in order after hoisting.
// hoisting : var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback (hoisting 이므로 맨 위로 선언이 올라간다)
function printImmediately(print){
	print();
}
printImmediately(() => console.log('hello'));

// Asymchronous callback
function printWithDelay(print, timeout){
	setTimeout(print,timeout);
}
printWithDelay(() => console.log('async callback', 2000));

// Callback Hell example
class UserStorage{
// class UserStorage 는 loginUser, getRoles 총 두 개의 함수를 가지고있다.
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'bokyoung' && password === 'kyoung') ||
                (id === 'ellie' && password === 'dream')){
                onSuccess(id);
            }
            else{
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'bokyoung'){
                onSuccess({name : 'bokyoung', role : 'admin'});
            }
            else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
	id,
	password,
	user => {
		userStorage.getRoles(
			user,
			userWithRole => {
				alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`)
			},
			error => {
				console.log(error);
			}
	    );
    },
	error => {
        console.log(error);
    }
);