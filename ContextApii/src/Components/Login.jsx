import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
function Login() {
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <input
        type="Password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
