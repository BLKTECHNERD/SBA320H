function Register({ setLoggedInUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();

    if (!users[username]) {
      users[username] = {
        password,
        readingList: [],
      };
      setLoggedInUser(username);
      alert("User registered");
      // Redirect to the Books tab after registration
      history.push("/books");
    } else {
      alert("Username already taken");
    }
  };
  
    return (
      <form onSubmit={register}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <button type="submit">Register</button>
      </form>
    );
  }