import React, { useContext } from "react";
import { useAuth } from "./context/user";
import './App.css';

function App() {

  const { user, setUser } = useAuth();

  console.log(user);

  return (
    <div className="app">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
