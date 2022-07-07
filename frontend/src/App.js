import './App.css';
import React, { useState, useEffect } from 'react';
import { Cards } from './components/cards/Cards.js';
import axios from "axios";
import { InputCard } from './components/InputCard.js';
import useLocalStorage from "./hooks/useLocalStorage";


function App() {
  const { data, setData } = useState()
  
  useEffect(() => {
    axios
      .get(
        ""
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // const postData = require("../src/mockData/getPosts.json");
  // console.log(postData);

  return (
    <div className="App">
      <InputCard />
          <Cards data={data}/>
    </div>
  );
}

export default App;
