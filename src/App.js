import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [inf, setInf] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      
      setInf(res.data.results);
    });
  });
  console.log(inf);

  return (
    <div>
      <h1>Characters of Rick and Morty</h1>
      <div className="container">
        {inf.map((item) => {
          return (
            <div className="card">
              <h1>{item.name}</h1>
              <img
                src={item.image}
                width="200px"
                height="250px"
                className="img"
              />
              <p>Last location</p>
              <p>{item.location.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
