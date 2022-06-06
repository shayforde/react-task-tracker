import React, { Component } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";


// after adding email and name
function App({ title }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "Feb 5th at 2.30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1.30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2.30pm",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <h1>{title}</h1>
      <Header title="away we go" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
