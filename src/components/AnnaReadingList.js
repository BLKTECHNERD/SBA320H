import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const AnnaReadingList = () => {
  // Step 2: Define Anna's book data
  const annaBooks = [
    // Replace with the actual book data for Anna
    {
      id: "book26",
      title: "The Power of Habit",
      author: "Charles Duhigg",
    },
    {
      id: "book27",
      title: "The Nightingale",
      author: "Kristin Hannah",
    },
    {
      id: "book28",
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
    },
    {
      id: "book29",
      title: "Circe",
      author: "Madeline Miller",
    },
    {
      id: "book30",
      title: "The Tattooist of Auschwitz",
      author: "Heather Morris",
    },
  ];

  return (
    <div>
      {/* Display Anna's books */}
      <h2>Anna's Reading List</h2>
      {annaBooks.map((book) => (
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

export default AnnaReadingList;
