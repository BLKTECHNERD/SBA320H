import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import UserReadingList from "./components/UserReadingList";
import HoneyReadingList from "./components/HoneyReadingList"; 
import MoniqueReadingList from "./components/MoniqueReadingList";
import NaomiReadingList from "./components/NaomiReadingList";
import "./App.css";

// Import background photos
import honeyBackground from "./images/pexels-skyler-ewing-8683083.jpg";
import moniqueBackground from "./images/pexels-ioana-motoc-12128634.jpg";
import naomiBackground from "./images/pexels-skyler-ewing-8719422.jpg";

const users = ["honey", "monique", "naomi"];

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Home Page */}
        <h1 style={{ fontFamily: "Fredericka the Great, cursive" }}>
          What Are My Friends Reading!
        </h1>
        <p>Choose a friend to view their personal reading list</p>
        {/* Add the "user-list" class to remove bullet points */}
        <ul className="user-list">
          {users.map((user) => (
            <li key={user}>
              <Link
                to={`/${user}`}
                style={{
                  display: "block",
                  border: "25px solid #ffffff",
                  padding: "100px",
                  borderRadius: "30px",
                  textDecoration: "none",
                  height: "200px",
                  margin: "5px 0",
                  textAlign: "center",
                  // Set the background image based on the user
                  backgroundImage: `url(${getUserBackground(user)})`,
                  backgroundSize: "cover", // Adjust background image size as needed
                  // Set text color based on the user
                  color:
                    user === "honey"
                      ? "black"
                      : user === "monique"
                      ? "#D8BFD8"
                      : "white",
                      fontSize: "20px",
                      textTransform: "uppercase",

                }}
              >
                {user.charAt(0).toUpperCase() + user.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Routes */}
        <Routes>
          {/* Route for honey's reading list */}
          <Route path="/honey" element={<HoneyReadingList />} />

          {/* Route for monique's reading list */}
          <Route path="/monique" element={<MoniqueReadingList />} />

          {/* Route for naomi's reading list */}
          <Route path="/naomi" element={<NaomiReadingList />} />

          {/* Existing routes for other users */}
          {users.map((user) => (
            <Route
              key={user}
              path={`/${user}`}
              element={<UserReadingList userId={user} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

// Function to get the background photo for each user
const getUserBackground = (user) => {
  switch (user) {
    case "honey":
      return honeyBackground;
    case "monique":
      return moniqueBackground;
    case "naomi":
      return naomiBackground;
    default:
      return "";
  }
};

export default App;

