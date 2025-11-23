//Q1
let arr1 = [10, 20, 30];
let arr2 = [40, 50];

let combined = [...arr1, ...arr2];
console.log("spread operator for arrays :",combined);

//Q2
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };

let profile = { ...person, ...extra };
console.log("spread operator for objects :",profile);

//Q3
function sumAll(...numbers) {
    return numbers.reduce((acc,i) => acc +i, 0);
}

console.log("sum using rest operator", sumAll(1,2,3,4));

//Q4
let numbers = [10, 20, 30, 40, 50];
let [a, ...remaining] = numbers;
console.log("value of a :",a);
console.log("remaining values", remaining);

//Q5
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};

let {address:{city, geo:{lat, lng}}} = user;
console.log("value of city, lat and lng :", city, lat, lng );

//Q6

function multiply(a, b) {
  return a * b;
}
let multiplyArrow = (a,b) => a*b;
console.log("multiply arrow function :", multiplyArrow(6,4));

//Q7
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};

console.log("data exstracted through optional chaining :", emp?.details?.profile?.role);