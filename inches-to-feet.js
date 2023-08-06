// const myInches = 12;
// const myFeet = myInches / 12;
// console.log('My feet', myFeet);

// const dadaInches = 120;
// const dadaFeet = dadaInches / 12;
// console.log('Dada Feet', dadaFeet);

// const dadiInches = 70;
// const dadiFeet = dadiInches / 12;
// console.log('Dadi Feet', dadiFeet.toFixed(1));

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const myInch = 63;
const myFeet = inchToFeet(myInch);
console.log('My feet', myFeet);

const dadaInch = 72;
const dadaFeet = inchToFeet(dadaInch);
console.log('Dada Feet',dadaFeet);

const nanaInch = 78;
const nanaFeet = inchToFeet(nanaInch);
console.log('Nana Feet', nanaFeet);