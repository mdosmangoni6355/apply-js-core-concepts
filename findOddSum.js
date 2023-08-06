function getSumOfAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    // console.log(index, element, sum);
  }
  return sum;
}

function getOddNumbersOfAnArray (numbers){
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myArray = [5, 7, 8, 10, 45, 30];
const oddNumbers = getOddNumbersOfAnArray(myArray);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('Odd Number Sum', oddNumberSum);
