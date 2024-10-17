// 4) Create a class ShoppingCart that holds a list of items.
// methods, addItem(), deleteItem(), updateItem(), calculateTotal()

class ShoppingCart {
  #cart = [];
  addItem(item, price) {
    this.#cart.push({ item, price });
  }
  deleteItem(item) {
    const indexOfItem = this.#cart.findIndex((el) => el.item === item);
    if (indexOfItem) {
      this.#cart.splice(indexOfItem, 1);
    } else {
      console.log("this item does not exist 112");
    }
  }

  updateItem(item, price) {
    const indexOfItem = this.#cart.findIndex((el) => el.item === item);

    if (indexOfItem) {
      this.#cart[indexOfItem] = { item, price };
    } else {
      console.log("this item does not exist");
    }
  }

  calculateTotal() {
    console.log(this.#cart.reduce((acc, curr) => acc + curr.price, 0));
  }

  showCart() {
    console.log(this.#cart);
  }
}

const cart = new ShoppingCart();
cart.addItem("lapt", 200);
cart.addItem("mob", 20);
cart.addItem("ipad", 300);
cart.showCart();
cart.calculateTotal();
cart.deleteItem("mob");
cart.showCart();
cart.calculateTotal();
cart.addItem("br", 400);
cart.updateItem("ipad", 150);
cart.calculateTotal();
cart.showCart();
