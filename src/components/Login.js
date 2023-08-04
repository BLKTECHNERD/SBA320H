function Login({ setLoggedInUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const history = useHistory();

  const login = (e) => {
    e.preventDefault();

    if (users[username]?.password === password) {
      // Successful login
      alert("Logged in");
      setLoggedInUser(username);
      // Redirect to the Books tab after login
      history.push("/books");
    } else {
      // Unsuccessful login
      alert("Invalid username or password");
    }
  };
  
    return (
      <form onSubmit={login}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Login</button>
      </form>
    );
  }