const button = document.getElementById('btn')!;

function clickHandler(message: string){
    console.log(message);
}

button.addEventListener('click', clickHandler.bind(null, 'Button is clicked'))

const map = new Map();