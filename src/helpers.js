// helpers.js
export function addToReadingList(book, loggedInUser, users) {
    if (loggedInUser && users[loggedInUser]?.readingList) {
      users[loggedInUser].readingList.push(book);
      alert("Book added to reading list");
    } else {
      alert("Please log in to add books to your reading list");
    }
  }
  