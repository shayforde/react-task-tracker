import React, { Component } from "react";
import Header from "./components/Header";
import Button from "./components/Button";

// take it from here

function App({ title }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <Header title="away we go" />
      <Button text="Press me" color="green" />
    </div>
  );
}

export default App;
