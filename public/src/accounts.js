function findAccountById(accounts, id) {
return accounts.find((account)=> account.id === id)

  // for (let account of accounts){
  //   console.log(account.id)
  //   if (account.id === id){
  //     return account
  //   }
  // }
}//let found = accounts.find((account) => account.id === id)
//return found

function sortAccountsByLastName(accounts) {
  let sortedAccount = accounts.sort((lastNameA, lastNameB)=> lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1)
  return sortedAccount
}
// return accounts.sort((a, b) => (a.name.last > b.name.last ? 1: -1))

function getTotalNumberOfBorrows(account, books) { // review this one
  // returns a number that represents the number of times the account's
  //ID in any book's "borrows" array
  // let accountObj = findAccountById(accounts, account)
  // let borrowCounts = books.reduce((acc, book) => {
  //   acc ++
  // return acc
  // }, 0)
  // return borrowCounts
 const { id } = account
 let count = 0;
 for (let book in books){
   let currentBookLog = books[book].borrows
   let matchingLog = currentBookLog.filter((item)=> item.id == id);
   count += matchingLog.length
 } 
 return count // review this one
}

function getBooksPossessedByAccount(account, books, authors) { // come back to this

  // const matchingBooks = books.reduce((acc, book) =>{
  //   let ourBook = book.borrows.find(
  //     (count) => count.id === neededId && count.returned === false)
      
  //   if (ourBook){
  //     acc += book
  //   }
  //   return acc;
  // }, [])
  
  // const combinedResults = matchingBooks.foreach((book) =>{
  //   // book["author"] = authors.find(author) => author.id === book.authorId)
  // }

  const accountId = account.id

  let bookPlusAuthor = [];
  
  for (let eachBook of books){
    for (let eachAuthor of authors){
      if (eachBook.authorId === eachAuthor.id){
        eachBook["author"] = eachAuthor;
        bookPlusAuthor.push(eachBook)
      }
      }
  }
  // console.log(bookPlusAuthor)
  // Loop through the authors array. If there is a match in authorId in the 
  // book, add that author information into the books array - done

  let finalArray = []
  for (let eachBook of bookPlusAuthor){
    for (let eachBorrower of eachBook.borrows){
      if (accountId === eachBorrower.id && eachBorrower.returned === false){
        finalArray.push(eachBook)
      }
    }
    // console.log(finalArray)
  }return finalArray

//  let matchingBooks = books.reduce((acc, book)=> {
//    let neededBook = book.borrows.find((eachAccountsId)=> eachAccountsId === accountID &&)
//    return acc
//  }, [])
  // let finalArray = []
  // let accountId = account.id
  // if (accountId)
  // books.foreach((book) =>{

  // })

  // if the account.id is the first object in books.js, then .push() the 
  // bookObject into the finalBooksArray
  // can use reduce to have a constantly accumulating variable




  // ---------------Goal:-----------------
  // returns an array of book objects (including author information) checked out
  // by the given account.
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

