/***************************************************
 * ******LECTURE 37: CREATING & USING CLASS*********
 ***************************************************/
/*class User{
    firstname: string;
    lastname: string;
    age: number;
    gender: string;

    constructor(fn: string, ln: string, a: number, g: string){
        this.firstname = fn;
        this.lastname = ln;
        this.age = a;
        this.gender = g;
    }

    greetuser(salutation: string){
        const msg = 'Hello ' + salutation+'. ' + this.firstname + ' ' + this.lastname;
        console.log(msg)
    }
}

const user1 = new User('john', 'smith', 28, 'male');
const user2 = new User('merry', 'jane', 32, 'female');
const user3 = new User('mark', 'vought', 29, 'male');

user1.greetuser('Mr');
user2.greetuser('Mrs');

// console.log(user1);
// console.log(user2);
// console.log(user3);*/



/***************************************************
 * *********LECTURE 39: ACCESS MODIFIERS************
 ***************************************************/


/*class Employee{
    constructor(public empName: string, private salary: number, public baseLocation: string, public isEligible: boolean, private hikePercent: number, public readonly empId: number){
    }

    public getSalary(){
        if(this.isEligible){
            return this.getNewsalary()
        }
        return this.salary;
    }

    private getNewsalary(){
        return this.salary + this.salary * this.hikePercent / 100;
    }
}

const employee = new Employee('john smith', 10000, 'london', true, 20, 101);
console.log(employee.getSalary());
employee.empId = 200;
console.log(employee.empId)*/



/***************************************************
 * *********LECTURE 32: INHERITANCE*****************
 ***************************************************/
/*class Person{
    name: string;
    protected dob: string;
    gender: string;

    constructor(name: string, dob: string, gender: string){
        this.name = name;
        this.dob = dob;
        this.gender = gender;
    }

    calculateAge(){
        console.log('Calculate Age of Person called');
        return new Date().getFullYear() - new Date(this.dob).getFullYear();
    }
}

class Employee extends Person{
    salary: number;
    bonus: number;

    constructor(n: string, dob: string, gen: string, salary: number, bonus: number){
        super(n, dob, gen);
        this.salary = salary;
        this.bonus = bonus;
    }

    getSalary(){
        return this.salary + this.bonus;
    }

    calculateAge(): number {
        console.log('Calculate Age of Employee called');
        return 2024 - new Date(this.dob).getFullYear();
    }
}

const emp = new Employee('john', '08-30-1991', 'male', 10000, 2000);
console.log(emp.calculateAge());*/


/***************************************************
 * *********LECTURE 44: GETTER & SETTER*************
 ***************************************************/

/*class Person{
    public name: string;
    private _age: number | null = null;

    get age(){
        if(this._age != null){
            return this._age;
        }
        throw new Error('Age is not defined for person: ' + this.name)
        
    }

    set age(value: number){
        if(value > 0)
            this._age = value;
        else
            throw new Error('Age cannot be a negative value.')
    }

    constructor(name: string){
        this.name = name;
    }
}

const person = new Person('john');
person.age = -10;
console.log(person.age);

class Circle{
    private _radius: number;

    get radius() {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get diameter(){
        return this._radius * 2;
    }

    set diameter(value: number){
        this._radius = value / 2;
    }
}*/


/***************************************************
 * ****LECTURE 45: STATIC METHODS & PROPERTIES******
 ***************************************************/
/*class Employee{
    public firstname: string;
    public lastname: string;
    public static count: number = 0;

    constructor(firstname: string, lastname: string){
        this.firstname = firstname;
        this.lastname = lastname;
        Employee.count++;
    }

    static sayHello(){
        return 'Hi There!';
    }
}

const emp1 = new Employee('john', 'smith');
console.log(Employee.count);

const emp2 = new Employee('john', 'smith');
console.log(Employee.count);

const emp3 = new Employee('john', 'smith');
console.log(Employee.count);

console.log(Employee.sayHello());*/



/***************************************************
 * ****LECTURE 45: STATIC METHODS & PROPERTIES******
 ***************************************************/
/*abstract class Employee{
    public firstname: string;
    public lastname: string;

    abstract getSalary(): number;

    constructor(fn: string, ln: string){
        this.firstname = fn;
        this.lastname = ln;
    }
}

class PermanentEmployee extends Employee{
    monthlySalary: number;
    constructor(fn: string, ln: string, salary: number){
        super(fn, ln);
        this.monthlySalary = salary;
    }

    getSalary(): number {
        return this.monthlySalary * 12;
    }
}

class ContractEmployee extends Employee{
    hourlySalary: number;

    constructor(fn: string, ln: string, salary: number){
        super(fn, ln);
        this.hourlySalary = salary;
    }

    getSalary(): number {
        return this.hourlySalary * 9 * 365;
    }
}

const emp1 = new PermanentEmployee('john', 'smith', 1000);
console.log(emp1.getSalary());

const emp2 = new ContractEmployee('mark', 'vought', 10);
console.log(emp2.getSalary());*/


/***************************************************
 * *******LECTURE 46: PRIVATE CONSTRUCTOR***********
 ***************************************************/
/*class Person{
    private static _instance: Person;

    private constructor(){

    }

    static getInstance(){
        if(Person._instance){
            return Person._instance;
        }
        Person._instance = new Person();
        return Person._instance;
    }
}

const person1 = Person.getInstance();
const person2 = Person.getInstance();

console.log(person1 === person2);
*/


/***************************************************
 * ***********LECTURE 48: INTERFACE*****************
 ***************************************************/
/*interface Roles{
    getRole(): string;
}

interface User extends Roles{
    firstname: string;
    lastname: string;
    readonly company: string;
    location?: string;

    greetUser(): void;
    getFullName(): string;
}

class Admin implements User{
    age: number = 30;
    company: string = 'Google';
    constructor(public firstname: string, public lastname: string){

    }

    greetUser(){
        console.log("Hello Admin: " + this.getFullName())
    }

    getFullName(): string {
        return this.firstname + ' ' + this.lastname;
    }

    getRole(): string {
        return 'admin';
    }
}

class Member implements User{
    company: string = 'Google';
    location?: string | undefined = 'London';
    constructor(public firstname: string, public lastname: string, loc?: string){
        this.location = loc;
    }

    greetUser(){
        console.log("Hello Member: " + this.getFullName())
    }

    getFullName(): string {
        return this.firstname + ' ' + this.lastname;
    }

    getRole(): string {
        return 'member';
    }
}

function displayGreetMessage(user: User){
    user.greetUser();
}

let admin: User;
admin = new Admin('john', 'smith');
console.log(admin.getRole());

const member = new Member('merry', 'jane');

displayGreetMessage(admin);
displayGreetMessage(member);
console.log(member.getRole());
*/


/***************************************************
 * ****LECTURE 51: INTERFACE AS FUNCTION TYPE*******
 ***************************************************/
//type SumFn = (num1: number, num2: number) => number;

interface SumFn{
    (num1: number, num2: number): number
}

let add: SumFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}