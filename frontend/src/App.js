import './App.css';
import React, {useState, useEffect} from 'react';
import { Cards } from './components/cards/Cards.js';
import { InputCard } from './components/InputCard.js';
import * as users from "./mockData/getPosts.json";

function App() {
  const { data, setData } = useState()
  localStorage.setItem('users', JSON.stringify(users));
  const theStoredUsers = JSON.parse(localStorage.getItem('users') || "[]")
  // console.log('theStoredUsers', theStoredUsers);

  // useEffect(() => {
  //   setData(theStoredUsers)
  // }, []);

  return (
    <div className="App">
      <InputCard />
          <Cards setData={setData} data={theStoredUsers}/>
    </div>
  );
}

export default App;
