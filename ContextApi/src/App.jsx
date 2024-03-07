import "./App.css";

import ContextProvider from "./Context/ContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <ContextProvider>
      <h1>Vs Code</h1>
      <Login />
      <Profile />
    </ContextProvider>
  );
}

export default App;
