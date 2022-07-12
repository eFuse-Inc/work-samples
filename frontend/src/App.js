import './App.css';
import React, {useState, useEffect} from 'react';
import { Cards } from './components/cards/Cards.js';
import { InputCard } from './components/InputCard.js';
import * as users from "./mockData/getPosts.json";

function App() {
  const { data, setData } = useState()
  useEffect(() => {
    //setting the data in localStorage
    localStorage.setItem("users", JSON.stringify(users));
  }, [data])
    //getting the set data to use through the application for state updates
  const theStoredUsers = JSON.parse(localStorage.getItem('users') || "[]")

  return (
    <div className="App">
      <InputCard />
          <Cards setData={setData} data={theStoredUsers}/>
    </div>
  );
}

export default App;
