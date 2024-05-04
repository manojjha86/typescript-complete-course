/****************************************************
 * ********LECTURE 28: ARRAY DESTRUCTURING***********
 * *************************************************/
/*const person = ['John', 'Smith', 28];

const [fname, lmane,age, gender = 'male'] = person;
console.log(fname, age, gender);
console.log(person);*/

/****************************************************
 * ********LECTURE 29: OBJECT DESTRUCTURING**********
 * **************************************************/
/*const user = {
    forename: 'John',
    age: 28,
    gender: 'male',
    city: 'london'
}

const {forename: fname, age, gender} = user;
console.log(fname, age, gender);*/

/****************************************************
 * ********LECTURE 30: SPREAD OPERATOR***************
 * **************************************************/
/*const users: string[] = ['john', 'mark', 'merry'];
console.log(users);
console.log(...users);

//Creating a shalow copy of array
const copyArray = [...users];
copyArray.push('steve');
console.log(copyArray);

//Creating an array from existing array
const extendedUsers: string[] = ['Ravi', 'steve', ...users]
console.log(extendedUsers);

//spread operator on objects
const person = {
    fname: 'john',
    age: 28,
    gender: 'male'
}

const employee = {...person, salary: 1200, company: 'Google'};
console.log(employee);*/


/****************************************************
 * ****LECTURE 31: REST PATTERN & REST PARAMETER*****
 * **************************************************/
/*let [a, b, ...rest] = [1, 2, 3, 4, 5];
//console.log(rest);

let arr = [10, 20, ...rest];
//console.log(arr);

function addNumbers(...numbers: number[]){
    let count = 0;
    for(let i of numbers){
        count += i;
    }
    return count;
}

console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 5, 7));
console.log(addNumbers(1, 2, 5, 6, 7, 9));*/




/****************************************************
 * ****LECTURE 32: THE NULLISH COALESCING OPERATOR***
 * **************************************************/
/*const value = 'VALID VALUE';

let storage = value ?? 'DEFAULT';

console.log(storage);*/



/****************************************************
 * **********LECTURE 33: OPTIONAL CHAINING***********
 * **************************************************/
/*const products = [
    {name: 'iPhone', price: 1200, details: {color: 'black', ram: 8}},
    {name: 'T-Shirt', price: 120, details: {color: 'red', size: 32}},
    {name: 'TS Book', price: 50, pages: 120, author: 'Sam'}
]

for(let prod of products){
    console.log('Product name: ' + prod.name);
    console.log('**************************')
    console.log('product price: ' + prod.price);
    console.log('Color: ' + prod.details?.color);
    console.log('\n\n');
}*/

/****************************************************
 * **********LECTURE 34: ARROW FUNCTION**************
 * **************************************************/
//FUNCTION DECLARATION
/*function print(message: string){
    console.log(message);
}

//FUNCTION EXPRESSION
// const sum = function(num1: number, num2: number){
//     return num1 + num2;
// }

//const sum: (n: number) => number  = num1 => num1 + 10;
const button = document.getElementById('btn');
button?.addEventListener('click', () => {
    console.log('button clicked');
});*/





/****************************************************
 * ******LECTURE 35: DEFAULT FUNCTION PARAMETER******
 * **************************************************/
function printDetails(name: string, age: number, gender: string = 'male'){
    const message = `Hi! my name is ${name}. And i am ${age}
    years old ${gender}`;

    console.log(message);
}

printDetails('john', 28);
