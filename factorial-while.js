function factorial(number) {
  let i = 1;
  let result = 1;
  while (i <= number) {
    result = result * i;
    i++;
  }
  return result;
}
const myNumber = factorial(9);
console.log(myNumber);
