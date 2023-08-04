import React from "react";
import { useSelector } from "react-redux";

const Book = ({ bookId, user, handleAddToReadingList }) => {
  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === bookId)
  );

  // Function to construct the Amazon purchase link using the book's ISBN
  const constructAmazonLink = (isbn) => {
    const amazonBaseUrl = "https://www.amazon.com/s?field-isbn=";
    return `${amazonBaseUrl}${isbn}`;
  };

  const addToReadingList = () => {
    // Call the function passed from the parent component (UserReadingList)
    handleAddToReadingList(bookId);
  };

  return (
    <div>
      <h3>{book?.title}</h3>
      <p>{book?.author}</p>
      {book?.isbn && (
        <a
          href={constructAmazonLink(book.isbn)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Purchase on Amazon
        </a>
      )}
      <button
        onClick={addToReadingList}
        className={
          user === "honey"
            ? "honey-button"
            : user === "monique"
            ? "monique-button"
            : user === "naomi"
            ? "naomi-button"
            : ""
        }
      >
        Add to Reading List
      </button>
    </div>
  );
};

export default Book;
