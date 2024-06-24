interface carsFeatures {
    name:string;
    model:number;
    color:string;
}

// creating object

let cars: carsFeatures [] = [
    {
        name:"Corolla",
        model:4201,
        color:"White"
    },

    {
        name: "Alto",
        model:23456,
        color:"Black"
    },
    {
        name:"Mehran",
        model:7869,
        color:"Red"
    }
]

// cars.forEach(car=>console.log(car))

// assignment 22

console.log(cars[3]) // index is out of bound

console.log(cars[2]) // output will be "Mehran",7869,"Red"

console.log(cars[-2]) // negative index which is not acceptable

console.log(cars["zero"]) //invalid index
console.log(cars[0]) //valid index
