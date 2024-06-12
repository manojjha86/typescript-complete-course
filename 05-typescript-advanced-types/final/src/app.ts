/***********************************************
 * *****INTERSECTION TYPE IN TYPESCRIPT*********
 ***********************************************/
/*type stringOrNumber = string | number;
type boolOrNumber = boolean | number;

type myNumberType = stringOrNumber & boolOrNumber;

let x: myNumberType = 20;*/

/*interface user {
    name: string,
    age: number
}

interface admin {
    name: string,
    role: string
}

type adminUser = user & admin;

var john: adminUser = {
    name: 'john',
    age: 28,
    role: 'admin'
}*/

/*function processOrder(order: Order & { status: string } ){
    console.log(order.id, order.items, order.status)
}

interface Order{
    id: number,
    items: string[]
}

processOrder({id: 123, items: ['item1', 'item2'], status: 'shiped'})
*/



/***********************************************
 * *****TYPE GUARDS IN TYPESCRIPT***************
 ***********************************************/
//type StringOrNumber = string | number;

/*function addition(a: StringOrNumber, b: StringOrNumber){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

addition('hello', 'world');
addition(20, 30);
addition('hello', 30);*/

/*class Animal{
    makeSound(){
        console.log('Generic animal sound');
    }
}

class Dog extends Animal{
    bark(){
        console.log('woof woof')
    }
}*/

//Classes
/*function makeCreatureSound(creature: Animal){
    if(creature instanceof Dog){
        creature.bark()
    }else{
        creature.makeSound();
    }    
}

let animal = new Animal();
let dog = new Dog();

makeCreatureSound(animal);
makeCreatureSound(dog);
*/

/*interface User {
    name: string,
    email?: string;
}

function greetUser(user: User){
    if('email' in user){
        console.log(`Hello ${user.name}. Your email is: ${user.email}`);
    }else{
        console.log(`Hello ${user.name}.`);
    }
    
}

greetUser({name: 'john'});
greetUser({name: 'mark', email: 'mark@gmail.com'});
*/




/***********************************************
 * *****DISCRIMINATED UNION*********************
 ***********************************************/
/*interface circle{
    kind: 'circle';
    radius: number;
}

interface square{
    kind: 'square';
    length: number;
}

type Shape = circle | square;

function calcArea(shape: Shape){
    switch(shape.kind) {
        case 'circle':
            return 3.14 * shape.radius * shape.radius;
        case 'square':
            return shape.length * shape.length;
    }  
}

console.log(calcArea({kind: 'square', length: 12}))
console.log(calcArea({kind: 'circle',radius: 12}))
*/



/***********************************************
 * *****TYPE CASTING IN TYPESCRIPT**************
 ***********************************************/
// let fname = <HTMLInputElement>document.querySelector('#fname')!;
/*let fname = document.querySelector('#fname');
if(fname){
    (fname as HTMLInputElement).value = 'John'
}*/


/***********************************************
 * *****INDEX PROPERTIES************************
 ***********************************************/
/*interface Product{
    id: number;
    name: string;
    [prop: string]: string | number
}

const product1: Product = {
    id: 1,
    name: "T-Shirt",
    color: 'Red',
    price: 123
}

const product2: Product = {
    id: 2,
    name: "Mug",
    material: 'Ceramic',
    capacity: 300
}

interface Settings{
    [props: string]: boolean | string | number
}

const mySettings: Settings = {
    darkMode: true,
    fontSize: 16,
    customTheme: 'pink'
}

interface User{
    name: string;
    [prop: string]: any
}

const users: User[] = [
    {name: 'John', age: 30, gender: 'male'},
    {name: 'Mark', interests: ['music', 'sports'], location: 'london'}
]*/


/***********************************************
 * *****FUNCTION OVERLOADING********************
 ***********************************************/
/*type StringOrNumber = string | number;

function addition(a: number, b: number): number;
function addition(a: string, b: string): string;
function addition(a: number, b: string): string;
function addition(a: string, b: number): string;
function addition(a: StringOrNumber, b: StringOrNumber){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

addition('Hello', 'World').split(',');
addition(10, 20);
*/



/***********************************************
 * *****WHAT ARE GENERICS***********************
 ***********************************************/
/*function swap<T>(arr: T[], index1: number, index2: number): T[]{
    //swapping logic
    return [];
}
swap([1, 2, 3], 0, 2);
swap(['Hello', 'Hi', 'How are you'], 1, 2);

const p: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
    }, 1000)
});*/



/***********************************************
 * *****CREATING A GENERIC FUNCTION*************
 ***********************************************/
/*function swap<T>(arr: T[], index1: number, index2: number): T[]{
    //swapping logic
    if(
        index1 < 0 || index1 >= arr.length 
        || index2 < 0 || index2 >= arr.length
    )
    {
        throw new Error('Invalid index');
    }
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}
console.log(swap([1, 2, 3], 0, 2));
console.log(swap(['Hello', 'Hi', 'How are you'], 1, 2));


function expand<T extends object, U extends Object>(obj1: T , obj2: U){
    return Object.assign(obj1, obj2);
}

let combined = expand({name: 'john', age: 28}, {name: 'john', gender: 'male'});
console.log(combined);
*/



/***********************************************
 * *****THE KEYOF CONSTRAINT********************
 ***********************************************/
/*function getPropValue<T extends object, U extends keyof T>(obj: T, key: U){
    return obj[key];
}

getPropValue({name: 'john', age: 28}, 'age');
*/



/***********************************************
 * *****CREATING A GENERIC CLASS****************
 ***********************************************/
/*type Book = {
    name: string;
    pages: number;
    price: number
}

type Cloth = {
    name: string;
    size: string;
    price: number
}

class ShoppingKart<T>{
    private items: T[] = [];

    addItem(item: T){
        this.items.push(item);
    }
    getItems(){
        return this.items
    }
}

const bookCart = new ShoppingKart<Book>();
bookCart.addItem({name: 'A Book', pages: 225, price: 20});
bookCart.addItem({name: 'Another Book', pages: 250, price: 25});
console.log(bookCart.getItems());

const clothCart = new ShoppingKart<Cloth>();
clothCart.addItem({name: 'T-Shirt', size: 'M', price: 225});
console.log(clothCart.getItems());

const strkart = new ShoppingKart<string>();
strkart.addItem('Hello');
strkart.addItem('World');
console.log(strkart.getItems())
*/



/***********************************************
 * *****GENERIC TYPE VS UNION TYPE**************
 ***********************************************/
/*class ShoppingKart<T>{
    private items: T[]= [];

    addItem(item: T){
        this.items.push(item);
    }
    getItems(){
        return this.items
    }
}


const strkart = new ShoppingKart<string>();
strkart.addItem('Hello');
strkart.addItem('World');
console.log(strkart.getItems())

const numkart = new ShoppingKart<number>();
numkart.addItem(200);
numkart.addItem(300);
console.log(numkart.getItems())
*/




/***********************************************
 * *****PARTIAL & READ ONLY GENERICS************
 ***********************************************/
/*interface UserSettings{
    username: string;
    email: string;
    darkMode: boolean;
    language: string;
}

function updateUserSettings(partialsettings: Partial<UserSettings>){
    console.log('Updating:', partialsettings)
}

const user: Readonly<UserSettings> = {
    username: 'johnsmith',
    email: 'johnsmith@gmail.com',
    darkMode: false,
    language: 'en'
}

user.username = 'something';

const newSettings = {
    darkMode: true,
    language: 'fr'
}
updateUserSettings(newSettings)



let arr: Readonly<string[]> = ['john', 'mark'];
arr.push('merry');
console.log(arr);
*/