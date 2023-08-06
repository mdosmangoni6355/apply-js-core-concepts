// Way 1
// function factorial(number){
//     for (let i = 10; i >= 1; i--){
//         let result = number * i;
//         console.log(`${number} x ${i} = ${result}`);
//     }
// }
// const result = factorial(9);

function reverseFactorial (number){
    let result = 1;
    for (let i = number; i >= 1; i--){
        result = result * i;
    }
    return result;
}
const number = 9;
const myResult = reverseFactorial (number);
console.log('Factorial of:', number, myResult);