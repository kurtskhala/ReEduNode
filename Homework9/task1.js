// 1) Create a Car class with properties make, model, and year,
// then make instance of electric car which have battery level

class Car {
    constructor(make, model, year) {
        this.make = make,
        this.model = model,
        this.year = year
    }

    getInfo() {
        console.log(this.make, this.model, this.year);
        
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, batteryLevel) {
        super(make, model, year),
        this.batteryLevel = batteryLevel;
    }

    getBattery() {
        console.log(this.batteryLevel);
        
    }
}

const car = new Car("toyota", "aqua", "2012")
car.getInfo();
const car2 = new ElectricCar("toyota", "aqua", "2012", "60")
car2.getInfo();