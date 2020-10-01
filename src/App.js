import React, { useState } from "react";
import Anime from "./Anime";
import "./styles.css";

export default function App() {
  const [show, changeShow] = useState(true);

  const change = () => {
    changeShow(!show);
  };
  return (
    <div className="App">
      <Anime show={show} />
      <button onClick={change}>click</button>
    </div>
  );
}
