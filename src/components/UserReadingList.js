import React from "react";
import { useDispatch } from "react-redux";
import { addBookToReadingList } from "../actions/userActions";
import Book from "./Book";
import { Link } from "react-router-dom"; // Import Link from React Router

const UserReadingList = ({ userId }) => {
  const dispatch = useDispatch();

  // Step 2: Define book data for each user
  const honeyBooks = [
    "book1", // Replace with the actual book ID for "The Alchemist" by Paulo Coelho
    "book2", // Replace with the actual book ID for "To Kill a Mockingbird" by Harper Lee
    "book3", // Replace with the actual book ID for "Becoming" by Michelle Obama
    "book4", // Replace with the actual book ID for "Pride and Prejudice" by Jane Austen
    "book5", // Replace with the actual book ID for "1984" by George Orwell
  ];

  const moniqueBooks = [
    "book6", // Replace with the actual book ID for "Educated" by Tara Westover
    "book7", // Replace with the actual book ID for "The Nightingale" by Kristin Hannah
    "book8", // Replace with the actual book ID for "The Great Gatsby" by F. Scott Fitzgerald
    "book9", // Replace with the actual book ID for "The Girl with the Dragon Tattoo" by Stieg Larsson
    "book10", // Replace with the actual book ID for "Sapiens: A Brief History of Humankind" by Yuval Noah Harari
  ];

  const naomiBooks = [
    "book11", // Replace with the actual book ID for "The Hunger Games" by Suzanne Collins
    "book12", // Replace with the actual book ID for "Gone Girl" by Gillian Flynn
    "book13", // Replace with the actual book ID for "Harry Potter and the Sorcerer's Stone" by J.K. Rowling
    "book14", // Replace with the actual book ID for "The Da Vinci Code" by Dan Brown
    "book15", // Replace with the actual book ID for "The Handmaid's Tale" by Margaret Atwood
  ];

  // Map of users and their books
  const userBooks = {
    honey: honeyBooks,
    monique: moniqueBooks,
    naomi: naomiBooks,
    
  };

  // Fetch the user's reading list based on the provided userId
  const userReadingList = userBooks[userId] || [];

  // Function to handle adding a book to the user's reading list
  const handleAddToReadingList = (bookId) => {
    dispatch(addBookToReadingList(userId, bookId));
  };

  return (
    <div>
      <h2>{userId.charAt(0).toUpperCase() + userId.slice(1)} </h2>
      {userReadingList.map((bookId) => (
        <Book
          key={bookId}
          bookId={bookId}
          user={userId} // Pass the user's name as a prop to Book component
          handleAddToReadingList={(bookId) => handleAddToReadingList(bookId)}
        />
      ))}
    </div>
  );
};

export default UserReadingList;
