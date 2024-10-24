// 1) Write a function that receives 3 parameters: amount of money,
// dayLimit and weekLimit you should calculate
// how many days does it needs to withdway whole amount of money.

function countOfDays(amount, dayLimit, weekLimit) {
  if (dayLimit <= weekLimit) {
    let left = amount;
    let weeklyWithdrawal = 0;
    let countOfDays = 0;
    let countOfDaysInWeek = 0;
    while (left > 0) {
      left -= dayLimit;
      countOfDays++;
      countOfDaysInWeek++;
      weeklyWithdrawal += dayLimit;
      if (weekLimit < weeklyWithdrawal) {
        weeklyWithdrawal = dayLimit;
        countOfDays = countOfDays + 7 - (countOfDaysInWeek - 1);
        countOfDaysInWeek = 1;
      }
    }
    return countOfDays;
  }
}

console.log(countOfDays(1100, 100, 500));
