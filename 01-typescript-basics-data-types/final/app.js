/******************************************
 * LECTURE 3: VARIABLES IN TYPESCRIPT
 *****************************************/
/*let num = 100;
let Num = 1000;

const str = 'Hello, World!';*/
/******************************************
 * LECTURE 4: DATATYPES IN TYPESCRIPT
 *****************************************/
//1. STRING DATATYPE
/*const str1 = 'This is a string created ${str2} using single quotes';
const str2 = "this is a string created using double quotes";
const str3 = `This is a string created
                using back ticks ${str1}
                this is another line`;

console.log(str1);
console.log(str3);

//2. NUMBER TYPE
let num = 12; //12.0
const pi = 3.14;

//3. BOOLEAN TYPE
let isEligible = true;
let isEqual = false;

// console.log(Boolean(null));
// console.log(Boolean('Hello'));

//0, '', null, undefined

let isGreater = 10 < 15;
console.log(isGreater);*/
/*********************************************
 * LECTURE 5: TYPE ASSIGNMENT & TYPE INFERANCE
 ********************************************/
/*function sum(num1: number, num2: number, isPrint: boolean, msg: string){
    if(isPrint){
        let s = num1 + num2;
        console.log(msg + ' ' + s);
    }
    return num1 + num2;
}

let n1 = 10;
let n2 = 20;

console.log(sum(n1, n2, true, "Sum is = "));*/
/*********************************************
 * LECTURE 6: OBJECT TYPE IN TYPESCRIPT
 ********************************************/
/*let person: {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    }
} = {
    name: 'John',
    age: 30,
    address: {
        city: 'london',
        country: 'UK'
    }
}

console.log(person.name);
console.log(person["age"]);*/
/*********************************************
 * LECTURE 7: ARRAYS IN TYPESCRIPT
 ********************************************/
/*let person: (string | number)[] = ['john', 28, 'male', 1000];
let names: string[] = [];
let birthyear: number[] = [1998, 1989, 2007];

names.push('john');

for(let year of birthyear){
    console.log(year);
}*/
/*********************************************
 * LECTURE 8: TUPLES IN TYPESCRIPT
 ********************************************/
/*let employee: [number, string, number, boolean] = [123, 'john', 2000, true];

employee = [124, 'mark', 1200, false];

console.log(employee);*/
/*********************************************
 * LECTURE 9: ENUMS IN TYPESCRIPT
 ********************************************/
/*enum Roles {
    ADMIN,
    READ_ONLY,
    WRITE_ONLY,
    READ_WRITE
}

const user = {
    name: 'john',
    age: 30,
    gender: 'male',
    role: Roles.ADMIN
}

if(user.role === Roles.ADMIN){
    console.log('This user is an admin')
}*/
/*********************************************
 * LECTURE 10: ANY TYPE IN TYPESCRIPT
 ********************************************/
/*let dynamicData: any;
dynamicData = 100;

let arr: any[];
arr =['Hello', 100, true, null, undefined];

let test;
console.log(typeof test);
console.log(test);*/
/*********************************************
 * LECTURE 11: UNION TYPE IN TYPESCRIPT
 ********************************************/
/*let user: {name: string; age: number} | null = null;

function getUser(){
    const uname = 'john';
    const uage = 28;
    user = {name: uname, age: uage};
    return user;
}

getUser();

function printStatus(message: string, code: string | number | boolean | null){
    if(typeof code === 'string'){
        console.log(`${message}. Status code: ${code.trim()}`);
    }else{
        console.log(`${message}. Status code: ${code}`);
    }
}

printStatus('Request was successful', 200);
printStatus('Resource was not found', '404');
printStatus('Resource was not found', ' 404');*/
/*********************************************
 * LECTURE 12: LITERAL TYPE IN TYPESCRIPT
 ********************************************/
/*const str = 'Hello, World!';
let str2 = 'Some string';

function roleMessage(role: 'admin' | 'read' | 'read-write'){
    switch(role){
        case 'admin':
            console.log('You have admin permission on this site.');
            break;
        case 'read':
            console.log('You have read permission on this site');
            break;
        case 'read-write':
            console.log('You have read / write permission on this site');
            break;
        default:
            console.log('unknown user permission');
    }
}

roleMessage('admin');*/
/*********************************************
 * LECTURE 13: UNDERSTANDING TYPE ALIAS
 ********************************************/
/*type stringType = string;
let str: stringType = 'Hello';

type StringOrNumber = string | number;

function printStatus(message: string, code: StringOrNumber){
    if(typeof code === 'string'){
        console.log(`${message}. Status code: ${code.trim()}`);
    }else{
        console.log(`${message}. Status code: ${code}`);
    }
}

printStatus('Request was successful', 200);
printStatus('Resource was not found', '404');

type roleType = 'admin' | 'read' | 'read-write';
function roleMessage(role: roleType){
    switch(role){
        case 'admin':
            console.log('You have admin permission on this site.');
            break;
        case 'read':
            console.log('You have read permission on this site');
            break;
        case 'read-write':
            console.log('You have read / write permission on this site');
            break;
        default:
            console.log('unknown user permission');
    }
}

roleMessage('admin');

type User = {firstname: string; lastname: string; age: number}

function getFullName(user: User){
    return user.firstname + ' ' + user.lastname;
}

function isEligibleForVoting(user: User){
    return user.age >= 18;
}

let user: User = {firstname: 'john', lastname: 'smith', age: 32};

console.log(getFullName(user));
console.log(isEligibleForVoting(user));*/
/*********************************************
 * LECTURE 14: FUNCTION RETURN TYPE
 ********************************************/
/*function add(num1: number, num2: number): void{
    console.log(num1 + num2);
    return;
}

console.log(add(12, 13));*/
/*********************************************
 * LECTURE 15: FUNCTION AS TYPE
 ********************************************/
/*type User = {name: string; age: number};

function greetUser(user: User){
    const greetmsg = 'Hello, ' + user.name;
    console.log(greetmsg);
}

function sum(num1: number, num2: number){
    return num1 + num2;
}

function isEligible(user: User){
    console.log(user.age >= 18)
}

let greet: (usr: User) => void;
greet = greetUser;

let user = {name: 'john', age: 28};
greet(user);

// greet = sum;
// greet(user);

greet = isEligible;
greet(user);*/
/*********************************************
 * LECTURE 16: FUNCTION TYPE FOR CALLBACK
 ********************************************/
/*let addNumbers: (n1: number, n2: number) => number;

function sum(num1: number, num2: number){
    return num1 + num2;
}

function add(num1: number, num2: number){
    console.log(num1 + num2);
}

addNumbers = sum; //works
addNumbers = add; //Error

function getResult(num1: number, num2: number, print: (str: string, n: number) => void){
    const result = num1 + num2;
    print('Sum = ', result);
}

function display(msg: string, result: number){
    console.log(msg + result);
}

getResult(12, 13, display);*/
/*********************************************
 * LECTURE 17: UNION TYPE IN TYPESCRIPT
 ********************************************/
/*let inputVal: unknown;
let uname: string = 'Something';

inputVal = 100;
inputVal = 'Hello, world';

if(typeof inputVal === 'string' ){
    uname = inputVal;
}

console.log(uname);
console.log(typeof inputVal);*/
/*********************************************
 * LECTURE 18: NEVER TYPE IN TYPESCRIPT
 ********************************************/
function greetUser(name) {
    console.log('Hello, ' + name);
}
//greetUser('John');
function createerror(errormsg, errorCode) {
    throw { message: errormsg, code: errorCode };
}
//createerror('Internal server error', 500);
console.log(greetUser('Mark'));
console.log(createerror('Page not found', 404));
