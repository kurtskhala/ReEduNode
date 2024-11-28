class Rectangle {
  public width;
  public height;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Circle {
  public radius;
  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Independent Functions

function addNumbers(a: number, b: number) {
  return a + b;
}

function multiplyNumbers(a: number, b: number) {
  return a * b;
}

function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function filterEvenNumbers(numbers: number[]) {
  return numbers.filter((num) => num % 2 === 0);
}

function findMax(numbers: number[]) {
  return Math.max(...numbers);
}

function isPalindrome(str: string): boolean {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

function calculateFactorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
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

console.log(
  `Rectangle Area: ${rectangleArea}, Perimeter: ${rectanglePerimeter}`
);
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
  private transactionHistory: {
    type: string;
    amount: number;
    date: Date;
    to?: string;
  }[] = [];
  private balance: number;
  private accountNumber: string;

  constructor(initialBalance: number, accountNumber: string) {
    this.balance = initialBalance;
    this.accountNumber = accountNumber;
  }

  public getAccountInfo(): { accountNumber: string; balance: number } {
    return {
      accountNumber: this.accountNumber,
      balance: this.balance,
    };
  }

  public deposit(amount: number): void {
    this.balance += amount;
    this.recordTransaction("Deposit", amount);
  }

  public withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Not enough funds.");
      return;
    }
    this.balance -= amount;
    this.recordTransaction("Withdraw", amount);
  }

  public transferFunds(amount: number, recipientAccount: BankAccount): void {
    if (amount > this.balance) {
      console.log("Not enough funds.");
      return;
    }
    this.balance -= amount;
    recipientAccount.deposit(amount);
    this.recordTransaction(
      "Transfer Out",
      amount,
      recipientAccount.getAccountInfo().accountNumber
    );
    recipientAccount.recordTransaction(
      "Transfer In",
      amount,
      this.accountNumber
    );
  }

  public getTransactionHistory(): {
    type: string;
    amount: number;
    date: Date;
    to?: string;
  }[] {
    return this.transactionHistory;
  }

  private recordTransaction(type: string, amount: number, to?: string): void {
    if(to) {
      this.transactionHistory.push({ type, amount, date: new Date(), to });
    } else {
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
