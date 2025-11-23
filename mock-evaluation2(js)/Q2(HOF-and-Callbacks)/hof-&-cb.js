//Q8
let nums = [10, 3, 7, 20, 13, 2];
//1.Map

let squares = nums.map(a => a*a);
console.log("Using map, created a new array of squares", squares);

//2.Filter

let prime = nums.filter(num => {
    for(let i=2; i< num; i++){
        if(num % i === 0) return false;
    }
    return num>1
});

console.log("Using filter, created prime numbers array", prime);

//3.Reduce

let sum = nums.reduce((acc, i) => acc + i, 0);
console.log("the sum of all elements using reduce :", sum);

//4.Sort

let sortedArray = nums.sort((a,b) => b-a);
console.log("Sorted array in descending order:", sortedArray);

//Q9

let displayCar = () => {
    console.log("Car is displayed");
}
let displayTruck = () => {
    console.log("Truck is displayed");
}
let displayBike = () => {
    console.log("Bike is displayed");
}

let vehicleInfo = (vehicleCategory, callbackFn) => {
    if(vehicleCategory === "Car"){
        callbackFn();
    }else if(vehicleCategory === "Truck"){
        callbackFn();
    }else if (vehicleCategory === "Bike"){
        callbackFn();
    }else{
        console.log("vehicle Category not found");
    }
}

vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);
vehicleInfo("Bus");
