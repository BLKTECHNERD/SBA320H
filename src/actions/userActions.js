// src/actions/userActions.js

export const addBookToReadingList = (userId, bookId) => {
  return {
    type: "ADD_BOOK_TO_READING_LIST",
    payload: {
      userId,
      bookId,
    },
  };
};
