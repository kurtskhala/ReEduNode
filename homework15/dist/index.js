"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
// Independent Functions
function addNumbers(a, b) {
    return a + b;
}
function multiplyNumbers(a, b) {
    return a * b;
}
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}
function findMax(numbers) {
    return Math.max(...numbers);
}
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * calculateFactorial(n - 1);
    }
}
// Test Cases
// სასურველია გავაკეთოთ Rectangle და Circle კლაზები და დავუმატოთ შესაბამისი მეთოდები.
const rectangle = new Rectangle(5, 8);
const circle = new Circle(3);
const rectangleArea = rectangle.calculateArea();
const rectanglePerimeter = rectangle.calculatePerimeter();
const circleArea = circle.calculateArea();
const circlePerimeter = circle.calculatePerimeter();
console.log(`Rectangle Area: ${rectangleArea}, Perimeter: ${rectanglePerimeter}`);
console.log(`Circle Area: ${circleArea}, Perimeter: ${circlePerimeter}`);
const sumResult = addNumbers(5, 3);
const multiplicationResult = multiplyNumbers(4, 7);
const capitalizedString = capitalizeString("javascript is fun");
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(`Sum: ${sumResult}`);
console.log(`Multiplication: ${multiplicationResult}`);
console.log(`Capitalized String: ${capitalizedString}`);
console.log(`Even Numbers: ${evenNumbers}`);
const maxNumber = findMax([23, 56, 12, 89, 43]);
const isPalindromeResult = isPalindrome("A man, a plan, a canal, Panama");
const factorialResult = calculateFactorial(5);
console.log(`Max Number: ${maxNumber}`);
console.log(`Is Palindrome: ${isPalindromeResult}`);
console.log(`Factorial: ${factorialResult}`);
/*
  
  2. შევქმნათ კლასი BankAccount რომელსაც ექნება accountNumber,balance და transactionHistory ფროფერთები.
     კონსტრუქტორში უნდა ვიღებდეთ accountNumber და initialBalance მნიშვნელობებს.
     გარედან არუნდა იყოს შესაძლებელი accountNumber, balance და transactionHistory შეცვლა.
     კლასში უნდა გვქონდეს მეთოდები:
     getAccountInfo
     deposit - თანხის დამატება ანგარიშზე.
     withdraw - თანხის მოკლება ანგარიშიდან.
     transferFunds - გადარიცხვა სხვა BankAccount_ზე
     getTransactionHistory - აბრუნებს transactionHistory_ მასივს
     recordTransaction - transactionHistory_ში ამატებს ჩნაწერს ტრანსფერის შესახებ
  
     შევქმნათ მინიმუმ 2 BankAccount_ის ინსტანსი.
     გავაკეთოთ სხვადასხვა ოპერაციები.
     დავბეჯდოთ შექმნილი ექაუნთების transactionHistory.
  
  */
class BankAccount {
    constructor(initialBalance, accountNumber) {
        this.transactionHistory = [];
        this.balance = initialBalance;
        this.accountNumber = accountNumber;
    }
    getAccountInfo() {
        return {
            accountNumber: this.accountNumber,
            balance: this.balance,
        };
    }
    deposit(amount) {
        this.balance += amount;
        this.recordTransaction("Deposit", amount);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Not enough funds.");
            return;
        }
        this.balance -= amount;
        this.recordTransaction("Withdraw", amount);
    }
    transferFunds(amount, recipientAccount) {
        if (amount > this.balance) {
            console.log("Not enough funds.");
            return;
        }
        this.balance -= amount;
        recipientAccount.deposit(amount);
        this.recordTransaction("Transfer Out", amount, recipientAccount.getAccountInfo().accountNumber);
        recipientAccount.recordTransaction("Transfer In", amount, this.accountNumber);
    }
    getTransactionHistory() {
        return this.transactionHistory;
    }
    recordTransaction(type, amount, to) {
        if (to) {
            this.transactionHistory.push({ type, amount, date: new Date(), to });
        }
        else {
            this.transactionHistory.push({ type, amount, date: new Date() });
        }
    }
}
const account1 = new BankAccount(1000, "BLA123");
const account2 = new BankAccount(500, "BLA456");
account1.deposit(200);
account1.withdraw(150);
account1.transferFunds(300, account2);
account2.deposit(100);
account2.withdraw(50);
console.log("Account 1 Transaction History:", account1.getTransactionHistory());
console.log("Account 2 Transaction History:", account2.getTransactionHistory());
