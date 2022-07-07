import './App.css';
import React from 'react';
import { Cards } from './components/cards/Cards.js';
import { InputCard } from './components/InputCard.js';

function App() {
  const postData = require("../src/mockData/getPosts.json");
  // console.log(postData);

  return (
    <div className="App">
      <InputCard />
          <Cards postData={postData}/>
    </div>
  );
}

export default App;
