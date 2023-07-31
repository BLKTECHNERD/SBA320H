// components/HoneyReadingList.js
import React from "react";

const HoneyReadingList = () => {
  // Step 2: Define Honey's book data
  const honeyBooks = [
    // Replace with the actual book data for Honey
    {
      id: "book1",
      title: "The Alchemist",
      author: "Paulo Coelho",
    },
    {
      id: "book2",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
    {
      id: "book3",
      title: "Becoming",
      author: "Michelle Obama",
    },
    {
      id: "book4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
    },
    {
      id: "book5",
      title: "1984",
      author: "George Orwell",
    },
  ];

  return (
    <div>
      {/* Display Honey's books */}
      <h2>Honey's Reading List</h2>
      {honeyBooks.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>By {book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default HoneyReadingList;
