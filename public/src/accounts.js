function findAccountById(accounts, id) {
  return accounts.find((account => account.id === id));
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>{
    return accountA.name.last > accountB.name.last ? 1 : -1});
}


function getTotalNumberOfBorrows(account, books) {
  //loops through each book
  // loop through each borrow 
  // for each time a user name appears on a borrow, add 1 to the total counter

  return books.reduce((total, book) => {
    const borrowRecord = book.borrows;  
     let bookBorrows = book.borrows.filter((borrowCount) => {
      return account.id === borrowCount.id})
      return total + bookBorrows.length;
    }, 0);
  }


  

/*
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]
*/


function getBooksPossessedByAccount(account, books, authors) {
  
   const fullBookData = books.map((book) => {
      // find the author that corresponds with each book
      // return a modified object with the author added
     
      const matchedAuthor = authors.find((author) => book.authorId === author.id)
      return {
        ...book,
        author:matchedAuthor
      }
   }) 
   return result = fullBookData.filter((book) => book.borrows.some((borrow) => borrow.id === account.id && !borrow.returned));
  
//const allCheckedOutBooks = (({borrows})=> {
 // return borrows.filter((borrow) => (!borrow.returned))})

//return console.log(allCheckedOutBooks);  
}




// use .map () to create an array of all books with author info
//create a helper function that returns an array of all books checked out
//use .filter() all books by a given user.


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};



