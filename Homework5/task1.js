// 1) write a function that takes a random number as an argument
//  and logs the random number while the argument number and random number are equal. 
//  argument number should be from 0 to 10.

function logRandomNumb(numb) {
    let randomNum;
    while(numb !== randomNum) {
        randomNum = Math.floor(Math.random()*11);
        console.log(randomNum);
    }
}

logRandomNumb(5);
