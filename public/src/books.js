function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const result = []
  result.push(books.filter((book)=> !book.borrows[0].returned))
  result.push(books.filter((book)=> book.borrows[0].returned))
  
  return result
}

function getBorrowersForBook(book, accounts) {
  const result = []
  const borrowRecord = book.borrows;
  for (borrow of borrowRecord){
    if (result.length < 10){
      const matchedAccount = accounts.find((account) => borrow.id === account.id);
      result.push({...matchedAccount, returned:borrow.returned})
    }
  } return result
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
