// 3) გაქვთ ორი აიპიაი https://fakestoreapi.com/users  და https://jsonplaceholder.typicode.com/users
// თქვენი მიზანია ორივე ერთდოულად დაარიზოლვოთ და ისე გამოიტანოთ დომში შესაბამისი ინფორამცია იუზერებზე, 
// ანუ სანამ ორივე აიპიაი პასუხს არ დააბრუნებს მანამდე არაფერი გამოაჩინოთ დომში.

const task3btn = document.querySelector(".task3btn");

async function fetch1() {
    const response = await fetch("https://fakestoreapi.com/users");
    const data = response.json();

    return data;
}

async function fetch2() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = response.json();

    return data;
}

function getData3() {
    Promise.allSettled([fetch1(), fetch2()])
      .then((data) => console.log(data))
}

task3btn.addEventListener("click", getData3);