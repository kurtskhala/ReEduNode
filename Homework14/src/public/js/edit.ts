const form = document.querySelector("form") as HTMLFormElement;

if (form) {
  form.addEventListener("submit", async (e) => {
    const url = window.location.pathname;
    const id = url.split("/").pop();
    console.log(id);

    e.preventDefault();
    const category = form.category.value;
    const price = form.price.value;
    const res = await fetch(`http://localhost:4000/expenses/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category,
        price,
      }),
    });
    console.log(res);
  });
}
