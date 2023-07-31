// components/MoniqueReadingList.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const MoniqueReadingList = () => {
  // Step 2: Define Monique's book data
  const moniqueBooks = [
    // Replace with the actual book data for Monique
    {
      id: "book6",
      title: "Educated",
      author: "Tara Westover",
    },
    {
      id: "book7",
      title: "The Nightingale",
      author: "Kristin Hannah",
    },
    {
      id: "book8",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
    {
      id: "book9",
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
    },
    {
      id: "book10",
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
    },
  ];

  return (
    <div>
      {/* Display Monique's books */}
      <h2>Monique's Reading List</h2>
      {moniqueBooks.map((book) => (
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

export default MoniqueReadingList;
