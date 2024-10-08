// 2) წამოიღეთ ინფორმაცია შემდეგი ეიპიაიდან: https://jsonplaceholder.typicode.com/users ,
// მოსული დატა გაპარსეთ შემდეგნაირად, თითოეულ ობიექტს უნდა ჰქონდეს მხოლოდ 4 ფროფერთი
// აიდი, სახელი, იუზერნეიმი და იმეილი

const task2btn = document.querySelector(".task2btn");

const getData2 = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(
        res.data.map((element) => ({
          id: element.id,
          name: element.name,
          username: element.username,
          email: element.email,
        }))
      );
    })
    .catch((e) => console.log(e));
};

task2btn.addEventListener("click", getData2)

