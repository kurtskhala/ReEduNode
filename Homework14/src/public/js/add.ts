const addForm = document.querySelector("form") as HTMLFormElement;


addForm.addEventListener("submit", async (e: SubmitEvent) => {
  e.preventDefault();
  const category = form.category.value;
  const price = form.price.value;

  const res = await fetch("http://localhost:4000/expenses/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      category,
      price,
    }),
  });

  console.log(res);
});
