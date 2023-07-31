import React from "react";
import { useSelector } from "react-redux";

const BookDescription = ({ bookId }) => {
  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === bookId)
  );

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <a href={book.purchaseLink} target="_blank" rel="noopener noreferrer">
        Purchase
      </a>
    </div>
  );
};

export default BookDescription;
