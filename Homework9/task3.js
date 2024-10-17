// 3) Create a class Employee with a method calculateSalary() 
// that calculates salary based on hours worked and hourly rate.

class Employee {
    constructor(hours, rate) {
        this.hours = hours;
        this.rate = rate;
    }

    calculateSalary() {
        return this.hours*this.rate
    }
}

const nika = new Employee(5,5);
console.log(nika.calculateSalary());