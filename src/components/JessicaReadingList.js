import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const JessicaReadingList = () => {
  // Step 2: Define Jessica's book data
  const jessicaBooks = [
    // Replace with the actual book data for Jessica
    {
      id: "book21",
      title: "The Silent Patient",
      author: "Alex Michaelides",
    },
    {
      id: "book22",
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
    },
    {
      id: "book23",
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
    },
    {
      id: "book24",
      title: "Educated",
      author: "Tara Westover",
    },
    {
      id: "book25",
      title: "Normal People",
      author: "Sally Rooney",
    },
  ];

  return (
    <div>
      {/* Display Jessica's books */}
      <h2>Jessica's Reading List</h2>
      {jessicaBooks.map((book) => (
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

export default JessicaReadingList;
