const handleDelete = async (id) => {
  const res = await fetch(`http://localhost:4000/expenses/${id}`, {
    method: "DELETE",
    headers: {
      "api-key": "12345",
    },
  });

  console.log(res);
};
