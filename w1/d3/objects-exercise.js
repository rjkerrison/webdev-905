const user = { name: 'Robin', id: 1 }

const book1 = {
  title: 'The Catcher in the Rye',
  author: 'J.D Salinger',
  isbn: '0316769487',
  category: 'Classic Literature',
}
const book2 = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  isbn: '0446310786',
  category: 'Classic Literature',
}

user.books = [book1, book2]

const library = []

library.push(user)

const book3 = { title: 'Little Women' }

library[0].books.push(book3)

console.log(library)
console.log(library[0])
