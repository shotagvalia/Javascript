const prompt = require(`prompt-sync`)();

let x = prompt(`Pick a number`);

function number(x){
    if(x % 2 == 0){
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(number(x));
