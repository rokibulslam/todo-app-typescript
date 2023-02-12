import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
const App: React.FC = () => {
  const [todo, setTodo]= useState("")
  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <InputField />
    </div>
  );
};

export default App;
