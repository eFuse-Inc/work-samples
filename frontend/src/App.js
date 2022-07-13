import './App.css';
import React, {useState, useEffect} from 'react';
import { Cards } from './components/cards/Cards.js';
import { InputCard } from './components/InputCard.js';
import User from "./mockData/getPosts.json";


function App() {
  const [data, setData] = useState(User.user)
  
  useEffect(() => {
    //checking if user has been here, before.
    console.log('users', User.user)
    const prevSession = JSON.parse(localStorage.getItem('users'))
    //setting the data in localStorage
    prevSession ? setData(prevSession) : 
      localStorage.setItem("users", JSON.stringify(User.user));
  }, [])

  return (
    <div className="App">
      <InputCard data={data} setData={setData} />
      <Cards data={data} setData={setData} />
    </div>
  );
}

export default App;
