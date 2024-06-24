// Function to store information about a car in an object
function create_car(manufacturer: string, model_name: string, options: { [key: string]: any }): { manufacturer: string, model_name: string, [key: string]: any } {
    // Create the car object with required properties
    let car = {
        manufacturer: manufacturer,
        model_name: model_name
    };

    // Add additional options to the car object
    for (let key in options) {
        if (options.hasOwnProperty(key)) {
            car[key] = options[key];
        }
    }

    return car;
}

// Call the function with required information and additional name-value pairs
let car1 = create_car("Toyota", "Camry", { color: "blue", sunroof: true });
let car2 = create_car("Ford", "Mustang", { color: "red", convertible: true });
let car3 = create_car("Tesla", "Model 3", { color: "black", autopilot: true });

// Print the objects to verify the information
console.log(car1);
console.log(car2);
console.log(car3);
