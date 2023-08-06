function milesToKm (miles){
    const kiloMeter = miles * 1.609344;
    return kiloMeter;
}
const myMiles = 3;
const myKiloMeter = milesToKm(myMiles);
console.log('My Kilometer', myKiloMeter);