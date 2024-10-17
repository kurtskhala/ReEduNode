// 5)  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars

class CarFactory {
  #cars = [];

  addCar(make, model, year, price) {
    let id = 1;
    if(this.#cars.length>0) {
        id = this.#cars[this.#cars.length - 1].id + 1;
    }
    this.#cars.push({ id, make, model, year, price });
  }

  deleteCar(id) {
    const indexOfCar = this.#cars.findIndex((el) => el.id == id);
    
    if (indexOfCar) {
      this.#cars.splice(indexOfCar, 1);
    } else {
      console.log("this car does not exist");
    }
  }

  updateCar(id, updates) {
    const indexOfCar = this.#cars.findIndex((el) => el.id === id)
    if(indexOfCar) {
        this.#cars[indexOfCar] = {...this.#cars[indexOfCar], ...updates}
    }
  }

  getAllCars() {
    console.log(this.#cars);
  }
}

const list = new CarFactory;

list.addCar("Toyota", "Aqua", "2012", 4000);
list.addCar("Toyota", "Prius", "2015", 6000);
list.addCar("Opel", "Astra", "2002", 2000);
list.addCar("BMW", "M3", "2012", 9000);
list.getAllCars();
list.deleteCar(2);
list.getAllCars();
list.updateCar(4, {year: 2015, price: 10000});
list.getAllCars();
