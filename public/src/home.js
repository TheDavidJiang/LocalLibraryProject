function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedBook = 0
  for (let book of books){
    if (book.borrows.every(borrowedObj => borrowedObj.returned) === false){
      borrowedBook +=1
    }
  }
  // books.every((borrowObj) => {
  //   console.log(borrowObj.borrows.returned)
  //   if(borrowObj.returned === false){
  //     console.log(borrowObj.returned)
  //       borrowedBook +=1 
  //   }
  // });
  return borrowedBook
}
/* let count = 0;
let bList = []
for (let book in books){
  bList.push(...books[book].borrows)}
  for (let val in bList){
    if (bList[val].returned === false) count ++
  }
  return count
}
*/


function getMostCommonGenres(books) {
  let finalArray = []
  let genreCount = books.reduce((acc, book) => {
    if (acc[book.genre]){
      acc[book.genre] += 1
    }else{
      acc[book.genre] = 1
    }
    return acc;
  }, {})
  

  for (const [key, value] of Object.entries(genreCount)) {
    finalArray.push( {"name":key, "count": value
    })
  }
  finalArray.sort((a, b) => b.count - a.count)
  return finalArray.slice(0, 5)
}


  // count up all the genres - done
  // make a key:value pair of genres:number - done
  // return the biggest number using sort

  //iterate over items, sort out the numbers with the highest count
  // once you have the array, pull out top 5 highest count



function getMostPopularBooks(books) {
  let finalArray = []
  let borrowCount = books.reduce((acc, book) => {
    acc[book.title] = book.borrows.length
    return acc;
  }, {})

  
  for (const [key, value] of Object.entries(borrowCount)) {
    finalArray.push( {"name":key, "count": value
    })
  }
  
// const popular = books.map((book) => ({
//  name: book.title,
//  count: book.borrows.length,
// })) 
//  popular.sort((popA, popB) => popB.count - popA.count)
// return popular.slice(0, 5)

  // console.log(finalArray)
  finalArray.sort((a, b) => b.count - a.count)
  return finalArray.slice(0, 5)
  // count the number of borrows in each book
  // return the book with the largest value
  
}

function getMostPopularAuthors(books, authors) {
  authorArray = [];
  let authorCount = books.reduce((acc, book) => {
    if (acc[book.authorId]){
      acc[book.authorId] += book.borrows.length
    }else{
      acc[book.authorId] = book.borrows.length
    } 
    return acc
  }, {})
  // console.log(authorCount)

  for (const [key, value] of Object.entries(authorCount)){
    // if (eachAuthor.id === key){
      
    // }
      // reassign the key to something
    // for (let i = 0; i < authors.length; i++){
    //   console.log("Key,", key)
    //   console.log("Authors,", authors[i].id)

    //   if (key == authors[i].id){
    //     updatedKey = authors[i].name.first + " " + authors[i].name.last
    //   }
    // }  
      let authorsFound = authors.find((eachAuthor) => eachAuthor.id == key);
    // console.log(authorsFound)
    authorArray.push( {"name": authorsFound.name.first + " " + authorsFound.name.last, "count": value})
  }
  // const authorCount = books.map((book)=> ({
  //   author: book.authorId,
  //   count: book.borrows.length
  // }))
  // console.log(authorArray)
  
  //run a loop to get the ids of each author
  
  
  // return author.id === counter.author//
  // return {
  //   name: `$(author.name.first) $(author.name.last)`,
  //   count: counter.count
  // }
  // console.log(id)
  authorArray.sort((a, b) => b.count - a.count)
  // console.log(authorArray)
  return authorArray.slice(0, 5)
  


  // make an object with authorsId: number of times it shows up on books - done
  //  match up the author name with the authorId
  // return the author name (s)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
