// components/NaomiReadingList.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const NaomiReadingList = () => {
  // Step 2: Define Naomi's book data
  const naomiBooks = [
    // Replace with the actual book data for Naomi
    {
      id: "book11",
      title: "The Hunger Games",
      author: "Suzanne Collins",
    },
    {
      id: "book12",
      title: "Gone Girl",
      author: "Gillian Flynn",
    },
    {
      id: "book13",
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
    },
    {
      id: "book14",
      title: "The Da Vinci Code",
      author: "Dan Brown",
    },
    {
      id: "book15",
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
    },
  ];

  return (
    <div>
      {/* Display Naomi's books */}
      <h2>Naomi's Reading List</h2>
      {naomiBooks.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>By {book.author}</p>
        </div>
      ))}

      {/* Add a link to navigate back to the main page */}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NaomiReadingList;
