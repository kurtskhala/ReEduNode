const handleDelete = async (id : string) => {
  const res = await fetch(`http://localhost:4000/expenses/${id}`, {
    method: "DELETE",
    headers: {
      "api-key": "12345",
    },
  });

  console.log(res);
};
