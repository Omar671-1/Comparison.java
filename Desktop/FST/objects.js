var car = {
    //     make: "Toyota",
    //     model: "Corolla",
    //     year: 2020,
    //     color: "Blue",
    //     engineRunning: false,
    
    
    //     start: function () {
    //         if (!this.engineRunning) {
    //             this.engineRunning = true;
    //             console.log("The engine is now running.");
    //         } else {
    //             console.log("The engine is already running.");
    //         }
    //     },
    
    //     stop: function () {
    //         if (this.engineRunning) {
    //             this.engineRunning = false;
    //             console.log("The engine has been stopped.");
    //         } else {
    //             console.log("The engine is already stopped.");
    //         }
    //     }
    // };
    
    // // To start the car
    // car.start();
    
    // // To stop the car
    // car.stop();
    
    
    // var car = new Object()
    // car.make = "Toyota"
    // car.model = "Corolla"
    // car.year = 2020
    
    // car.start = function() {
    //     console.log("the car has started")
    // }
    
    
    
    // console.log(car.start())
    
    var person = {
        firstName: "Halima"
    }
    
    person.firstName = "Bushra"
    
    console.log(person.firstName + " dot  notation") // the dot notation
    console.log(person['firstName'] + " square bracks notation") // the square brackts notation
    
    var { firstName } = person
    console.log(firstName + " Destructuring")