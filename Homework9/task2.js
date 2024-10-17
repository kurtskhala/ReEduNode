// 2) Create a Library class that stores a list of books (as an array)
// which have following methods addBook(), removeBook(), listBooks()

class Library {
  #books = [];
  addBook(book) {
    this.#books.push(book);
  }
  removeBook(book) {
    if (this.#books.includes(book)) {
      this.#books.splice(
        this.#books.findIndex((el) => el === book),
        1
      );
    } else {
      console.log("Try another book");
    }
  }
  listBooks() {
    console.log(this.#books);
  }
}

const lib = new Library();

lib.addBook("nika");
lib.addBook("luka");
lib.addBook("nuca");
lib.addBook("ana");
lib.listBooks();
lib.removeBook("nuca");
lib.listBooks();
lib.addBook("gio");
lib.listBooks();
lib.removeBook("vaja");
