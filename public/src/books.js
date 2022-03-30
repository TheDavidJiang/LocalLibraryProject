function findAuthorById(authors, id) {
  let authorFound = authors.find((author)=> author.id === id)
  return authorFound
}


function findBookById(books, id) {
  let bookFound = books.find((book)=> book.id === id)
  return bookFound
}


function partitionBooksByBorrowedStatus(books) {
  let finalArray = [[], []]
  for (let book of books){
    if (book.borrows.every(borrowedObj => borrowedObj.returned) === false){
      finalArray[0].push(book)
    }else{
      finalArray[1].push(book)
    }
  }
  return finalArray
}


function _getAccbyId(accounts, id) {
  return accounts.find((account)=> account.id === id)
}


function getBorrowersForBook(book, accounts) {
  let borrowersList = []
  for (let eachBorrower in book.borrows){
    borrowersList.push(_getAccbyId(accounts, book.borrows[eachBorrower].id))
  }
 for (let item in borrowersList){
  for (let borrowers in book.borrows){
    borrowersList[item]["returned"] = book.borrows[borrowers].returned
  }
  }return borrowersList.slice(0, 10)
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
