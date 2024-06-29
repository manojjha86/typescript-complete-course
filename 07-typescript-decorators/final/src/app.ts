/***********************************************
 * *****UNDERSTANDING DECORATORS****************
 ***********************************************/
/*function LoggerDecorator(logMsg: string){
    console.log('LOGGER DECORATOR FACTORY')
    function Logger(target: Function){
        console.log('LOGGER DECORATOR CALLED')
        //console.log(logMsg)
        //console.log(target);
    }

    return Logger;
}

function Template(template: string, elementId: string){
    console.log('TEMPLATE DECORATOR FACTORY')
    return function(target: any){
        console.log('TEMPLATE DECORATOR CALLED')
        const u = new target();
        const container = document.getElementById(elementId);
        if(container){
            container.innerHTML = template;
            const h2 = container.querySelector('h2');
            if(h2){
                h2.textContent = 'Hello Mr. ' + u.name;
            }
        }
    }
}


@LoggerDecorator('This is custom Logger...')
@Template('<h2>Dynamic Header</h2>', 'container')
class User{
    name: string = 'John';
    age: number = 28;

    constructor(){
        console.log('User class constructor called...')
    }
}

//const u = new User();
*/



/***********************************************
 * *****PROPERTY DECORATOR**********************
 ***********************************************/
/*function Capitalize(target: any, propertyKey: string): any{
    let value: string;

    const getter = function(){
        return value.charAt(0).toUpperCase() + value.slice(1); // S + amsung
    }

    const setter = function(newValue: string){
        value = newValue.toLowerCase()
    }
    
    return {
        get: getter,
        set: setter
    }
}

function AccessLogger(target: any, name: string, descriptor: PropertyDescriptor){
    const getter = descriptor.get;
    const setter = descriptor.set;

    descriptor.get = function(){
        console.log(`Accessing value for property ${name}...`);
        if(getter){
            return getter.call(this);
        }
        return undefined;
    }

    descriptor.set = function(value: number){
        console.log(`Setting value for property ${name}...`);
        if(setter){
            setter.call(this, value);
        }
    }

    return descriptor;
}

class Product{
    @Capitalize
    name: string;

    private _price: number;

    @AccessLogger
    get price(){
        return this._price;
    }

    set price(value: number){
        if(value > 0){
            this._price = value;
        }else{
            throw new Error("Price should be a value greater than zero");
        }
    }

    constructor(name: string, price: number){
        this.name = name;
        this._price = price;
    }
}

const p = new Product('apple', 2400);
p.price = 3000;
console.log(p.price);
*/



/***********************************************
 * *****WHEN A DECORATOR EXECUTES***************
 ***********************************************/
/*function CLS_DECORATOR(target: any){
    console.log('CLASS DECORATOR CALLED!');
}

function PROP_DECORATOR(target: any, propertyKey: string): any{
    console.log('PROPERTY DECORATOR CALLED!');
}

function ACC_DECORATOR(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('ACCESSOR DECORATOR CALLED');
}

function PARAM_DECORATOR(target: any, paramName: string, index: number){
    console.log('PARAMETER DECORATOR CALLED');
}

function METH_DECORATOR(target: any, methodName: string, descriptor: PropertyDescriptor){
    console.log('METHOD DECORATOR CALLED!');
}

@CLS_DECORATOR
class Person{
    @PROP_DECORATOR
    name: string;

    constructor(n: string){
        this.name = n;
    }

    @METH_DECORATOR
    calculateAge(@PARAM_DECORATOR dob: string){
        //calculate date of birth;
    }
}
*/



/***********************************************
 * *****RETURNING A CLASS FROM A DECORATOR *****
 ***********************************************/
/*function Logger(target: new (...args: any[]) => {}): any{
    class LoggingClass extends target{
        static company: string = 'Google';
        constructor(...args: any[]){
            super(...args);
            console.log('Creating a new LoggingClass Instance...')
        }
    }

    return LoggingClass;
}

@Logger
class Person{
    name: string;

    constructor(n: string){
        this.name = n;
    }
}

const p = new Person('john');
console.log(p);
*/



/***********************************************
 * *****CREATING A VALIDATION DECORATOR*** *****
 ***********************************************/
function required(target: any, propName: string){
    validateObject[target.constructor.name]= {
        ...validateObject[target.constructor.name],
        [propName]: ['required']
    }
}

function minlength(length: number){
    return function(target: any, propName: string){
        validateObject[target.constructor.name]= {
            ...validateObject[target.constructor.name],
            [propName]: ['minlength']
        }
    }
}
function positiveNumber(target: any, propName: string){
    validateObject[target.constructor.name]= {
        ...validateObject[target.constructor.name],
        [propName]: ['positiveNumber']
    }
}

interface IValidator{
    [prop: string]: {
        [propKey: string]: string[]; // ['required', 'minlength']
    }
}

const validateObject: IValidator = {};

function validate(obj: any): boolean{
    let isValid = true;

    const validateClass = validateObject[obj.constructor.name];
    if(!validateClass){
        return true;
    }

    for(let prop in validateClass){
        for (let validator of validateClass[prop]){
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'minlength':
                    isValid = isValid && obj[prop].length < 3;
                    break;
                case 'positiveNumber':
                    isValid = isValid && obj[prop].length < 0;
                    break;
            }
        }
    }

    return isValid;

}

class User{
    @required
    @minlength(3)
    username: string;

    @positiveNumber
    age: number;

    constructor(uname: string, age: number){
        this.username = uname;
        this.age = age;
    }
}

const u1 = new User('john', 28);
const u2 = new User('', 30);

if(!validate(u2)){
    alert("Invalid Input.");
}else{
    console.log('user created successfully');
}