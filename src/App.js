import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import headerImage from "./images/pexels-polona-mitar-osolnik-1837726 (2).jpg";
import { addToReadingList } from "./helpers";
import { useNavigate } from "react-router-dom";

const styles = {
  formContainer: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  input: {
    width: "95%",
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "3px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#000000",
    color: "#F5F5F5",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
  searchInput: {
    width: "30%",
    margin: "0 auto", 
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "3px",
    border: "1px solid #ccc",
    textAlign: "center",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
    marginTop: "20px",
  },
};

const bookStyles = {
  bookItem: {
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  bookImage: {
    width: "100px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "3px",
    marginRight: "10px",
  },
  addToReadingListBtn: {
    padding: "5px 10px",
    fontSize: "14px",
    backgroundColor: "#000000",
    color: "#F5F5F5",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
  // Style for the books container to display them in rows
  booksContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  // Style for each book item
  bookItemStyle: { // Use a unique key for this style, e.g., bookItemStyle
    flex: "0 0 200px",
    margin: "10px", 
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
};


const users = {};

function Register({ setLoggedInUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

 const register = (e) => {
    e.preventDefault();

    if (!users[username]) {
      users[username] = {
        password,
        readingList: [],
      };
      setLoggedInUser(username);
      alert("User registered");
      navigate("/books"); // Navigate to the Books page after successful registration
    } else {
      alert("Username already taken");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <form style={styles.formContainer} onSubmit={register}>
        <input
          style={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button style={styles.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

function Login({ setLoggedInUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    if (users[username]?.password === password) {
      // Successful login
      alert("Logged in");
      setLoggedInUser(username);
      navigate("/books");
    } else {
      // Unsuccessful login
      alert("Invalid username or password");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <form style={styles.formContainer} onSubmit={login}>
        <input
          style={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button style={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

function Books({ loggedInUser }) {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredBookId, setHoveredBookId] = useState(null); // New state variable for hovered book ID

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setBooks(data.items || []));
  }, [searchTerm]);

  const addToReadingList = (book) => {
    if (loggedInUser && users[loggedInUser]?.readingList) {
      users[loggedInUser].readingList.push(book);
      alert("Book added to reading list");
    } else {
      alert("Please log in to add books to your reading list");
    }
  };

  return (
    <div>
      <div style={styles.searchContainer}>
        <input
          style={styles.searchInput} 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for books"
        />
      </div>

      <div style={bookStyles.booksContainer}>
        {books.map((book) => (
          <div
            key={book.id}
            style={bookStyles.bookItem}
            onMouseEnter={() => setHoveredBookId(book.id)}
            onMouseLeave={() => setHoveredBookId(null)}
          >
            <h2>{book.volumeInfo.title}</h2>
            <img
              style={bookStyles.bookImage}
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
            />
            {hoveredBookId === book.id && (
              <>
                <p
                  dangerouslySetInnerHTML={{
                    __html: book.volumeInfo.description,
                  }}
                />
                <button
                  style={bookStyles.addToReadingListBtn}
                  onClick={() => addToReadingList(book, loggedInUser, users)}
                >
                  Add to reading list
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function UserProfile({ loggedInUser }) {
  const { username } = useParams();
  const user = users[username];
  const [userBooks, setUserBooks] = useState([]);
  const [hoveredBookId, setHoveredBookId] = useState(null); // New state variable for hovered book ID

  useEffect(() => {
    if (user && user.readingList) {
      const bookIds = user.readingList.map((book) => book.id);
      const bookRequests = bookIds.map((id) =>
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      );

      Promise.all(bookRequests)
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          setUserBooks(data);
        })
        .catch((error) => {
          console.error("Error fetching book details:", error);
        });
    }
  }, [user]);

  const removeFromReadingList = (book) => {
    if (loggedInUser && users[loggedInUser]?.readingList) {
      const updatedReadingList = users[loggedInUser].readingList.filter(
        (item) => item.id !== book.id
      );
      users[loggedInUser].readingList = updatedReadingList;
      setUserBooks(updatedReadingList);
      alert("Book removed from reading list");
    } else {
      alert("Please log in to manage your reading list");
    }
  };

  if (!user) return <h1>User not found</h1>;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{username}'s Reading List</h1>
      </div>
      <div style={bookStyles.booksContainer}>
        {" "}
        {/* Add the books container to display them in rows */}
        {userBooks.map((book) => (
          <div
            key={book.id}
            style={bookStyles.bookItem}
            onMouseEnter={() => setHoveredBookId(book.id)} // Update the hovered book ID on mouse enter
            onMouseLeave={() => setHoveredBookId(null)} // Reset the hovered book ID on mouse leave
          >
            <h2>{book.volumeInfo.title}</h2>
            <img
              style={bookStyles.bookImage}
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
            />
            {hoveredBookId === book.id && ( // Show the book details only when the book ID matches the hovered book ID
              <>
                <p
                  dangerouslySetInnerHTML={{
                    __html: book.volumeInfo.description,
                  }}
                />
                {user.readingList.find((item) => item.id === book.id) ? (
                  <button
                    style={bookStyles.addToReadingListBtn}
                    onClick={() => removeFromReadingList(book)}
                  >
                    Remove from reading list
                  </button>
                ) : (
                  <button
                    style={bookStyles.addToReadingListBtn}
                    onClick={() => addToReadingList(book)}
                  >
                    Add to reading list
                  </button>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggle function from the context

  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");

  useEffect(() => {
    document.body.className = theme;
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  const linkColor = isDarkTheme ? "#ffffff" : "#000000";
  const paragraphColor = isDarkTheme ? "#ffffff" : "#000000";

  return (
    <Router>
      <div className={`App ${theme}`}>
        <div className="header-container">
          {/* Header image */}
          <img
            src={headerImage}
            alt="Bookshelf+ Header"
            style={{ width: "100%", margin: "0 auto", marginBottom: "20px" }}
          />
          {/* Overlayed h1 */}
          <div className="search-overlay">
          <h1 style={{ fontSize: "100px" }}>Bookshelf+</h1>
          </div>
        </div>
        <div className="top-right-container">
          {/* Move the ThemeToggle component to this container */}
          <div className="theme-toggle-container">
            <ThemeToggle toggleTheme={toggleTheme} />
          </div>
        </div>
        
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            marginBottom: "20px",
            color: "#000000",
            fontSize: "35px"
          }}
        >
          Welcome to Bookshelf+! 
        </p>
        
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            marginBottom: "20px",
            color: "#000000",
            fontSize: "18px"
          }}
        >
         Dive into a world of endless possibilities with
          our extensive collection of books. Search, discover, and curate your
          reading list with ease. Whether you're a seasoned bookworm or just
          starting your literary journey, Bookshelf+ has something for everyone.
          Register or log in below to embark on your reading journey and create your
          personalized virtual bookshelf today!
        </p>

        {/* Conditionally render login and register links */}
        {!loggedInUser && (
          <>
            <Link
              style={{ margin: "10px", color: linkColor }}
              to="/register"
              className={isDarkTheme ? "white-text" : ""}
            >
              Register
            </Link>
            <Link
              style={{ margin: "10px", color: linkColor }}
              to="/login"
              className={isDarkTheme ? "white-text" : ""}
            >
              Login
            </Link>
          </>
        )}

        {/* Conditionally render Books and My Profile links */}
        {loggedInUser && (
          <>
            <Link
              style={{ margin: "10px", color: linkColor }}
              to="/books"
              className={isDarkTheme ? "white-text" : ""}
            >
              Books
            </Link>
            <Link
              style={{ color: linkColor }}
              to={`/${loggedInUser}`}
              className={isDarkTheme ? "white-text" : ""}
            >
              My Profile
            </Link>
          </>
        )}
      </div>
      <Routes>
        {" "}
        {/* Use Routes component as the root component for defining routes */}
        <Route
          path="/register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="/login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route path="/books" element={<Books loggedInUser={loggedInUser} />} />
        <Route
          path="/:username"
          element={<UserProfile loggedInUser={loggedInUser} />}
        />
        {/* Add a catch-all route to redirect to Books when loggedInUser is not null */}
        {loggedInUser && <Route path="/*" element={<Books loggedInUser={loggedInUser} />} />}
      </Routes>
    </Router>
  );
}
export default App;
