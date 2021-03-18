isBigEnough = (element) => element <= 10;
const values = [12, 5, 6, 19, 100, 10, 11, 4500].filter(isBigEnough);
// console.log(`Test Values: ${values}`);

countriesName = (countryName) => countryName == "Sweden";
const myCountry = ["Sweden", "Canada", "Australia", "Mexico"].filter(countriesName);
console.log(`his country name is: ${myCountry}`); 