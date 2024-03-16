
let data = 'Some value';

function sum(num1: number, num2: number){
    if(num1 > 0 && num2 > 0){
        const result = num1 + num2;
        return result;
    }else{
        console.log('Numbers must be greater than zero')
        return;
    }
}

sum(20, 200);