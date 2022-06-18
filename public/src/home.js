function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
   const count = (book.borrows[0].returned ? 0 : 1);
    return acc + count;
  },0);
}

function getMostCommonGenres(books) {

  function getGenres(books){
    const result = []
    const genres = books.forEach((book) => {
      result.includes(book.genre) ? result : result.push(book.genre)
    });
    return result;}

  function genreCount(books){
    const result = []
    const genres = getGenres(books);
    for (genre of genres){
        const count = books.filter((book) => book.genre === genre).length;
        result.push({name:genre, count:count});
    }
    return result;
  }

const totalGenresAndCounts = genreCount(books);
let sorted = totalGenresAndCounts.sort((genreA, genreB) => {
  return genreA.count > genreB.count ? -1 : 1;
});
sorted = sorted.slice(0,5);
return sorted;
}

  


function getMostPopularBooks(books) {
  const result = []
  books.forEach((book) => {
    const {borrows, title} = book;
    result.push({name: title, count: borrows.length});
  });
  let sorted = result.sort((bookA, BookB) => {
    return bookA.count > BookB.count ? -1 : 1;
  });
  sorted = sorted.slice(0,5);
return sorted;
}

function getMostPopularAuthors(books, authors) {
  const result = [];

  const bookBorrows = books.map((book) => {
    return { ...book, borrowCount: book.borrows.length };
  }); 

  function borrowCount(bookBorrows, author) {
    return bookBorrows.reduce((acc, book) => {
    const bookCounts = book.authorId === author.id ? book.borrowCount : 0;
    return acc + bookCounts;
    }, 0);
  }

  authors.forEach((author) => {
    const {
      name: { first, last },
      id,
    } = author;
   
    result.push({ 
      name: `${first} ${last}`, 
      count: borrowCount(bookBorrows, author) });
  });

  let sorted = result.sort((authorA, authorB) => {
    return authorA.count > authorB.count ? -1 : 1;
  });
  sorted = sorted.slice(0, 5);
  return sorted;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
