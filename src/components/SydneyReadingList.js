import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const SydneyReadingList = () => {
  // Step 2: Define Sydney's book data
  const sydneyBooks = [
    // Replace with the actual book data for Sydney
    {
      id: "book16",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
    },
    {
      id: "book17",
      title: "The Book Thief",
      author: "Markus Zusak",
    },
    {
      id: "book18",
      title: "The Night Circus",
      author: "Erin Morgenstern",
    },
    {
      id: "book19",
      title: "The Goldfinch",
      author: "Donna Tartt",
    },
    {
      id: "book20",
      title: "Little Fires Everywhere",
      author: "Celeste Ng",
    },
  ];

  return (
    <div>
      {/* Display Sydney's books */}
      <h2>Sydney's Reading List</h2>
      {sydneyBooks.map((book) => (
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

export default SydneyReadingList;
