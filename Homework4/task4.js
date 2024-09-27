// 4) Create an object representing a shopping cart. Add methods to add items, remove items, and calculate the total price.

const cart = {
  items: [
    {
      id: 1,
      name: "iphone 15",
      price: 2000,
    },
    {
      id: 2,
      name: "iphone 14",
      price: 1500,
    },
    {
      id: 3,
      name: "iphone 13",
      price: 1000,
    },
  ],
  removeItem: function (id) {
    this.items.forEach((item, index) => {
      if (item.id === id) {
        this.items.splice(index, 1);
      }
    });
    return this;
  },
  addItem: function (name, price) {
    this.items.push({
      id: this.items[this.items.length - 1].id + 1,
      name: name,
      price: price,
    });
    return this;
  },
  calculateTotalPrice: function () {
    return this.items.reduce((acc, curr) => acc + curr.price, 0);
  },
};

console.log(cart.addItem("iphone 12", 800).removeItem(2).calculateTotalPrice());
