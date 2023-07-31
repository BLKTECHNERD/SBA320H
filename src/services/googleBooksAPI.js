// src/services/googleBooksAPI.js

import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

// Function to fetch multiple books from Google Books API
export const fetchBookData = async (searchTerm, maxResults = 5) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: searchTerm,
        maxResults,
      },
    });

    const books = response.data.items.map((item) => ({
      id: item.id,
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors
        ? item.volumeInfo.authors.join(", ")
        : "Unknown Author",
      description: item.volumeInfo.description,
      isbn: item.volumeInfo.industryIdentifiers
        ? item.volumeInfo.industryIdentifiers[0].identifier
        : "",
      purchaseLink: item.volumeInfo.previewLink, // Use previewLink as a fallback if ISBN is not available
    }));

    return books;
  } catch (error) {
    console.error("Error fetching book data:", error);
    return [];
  }
};
