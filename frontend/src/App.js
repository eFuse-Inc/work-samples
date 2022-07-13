import './App.css';
import React, {useState, useEffect} from 'react';
import { Posts } from './components/posts/Posts.js';
import { PostInput } from './components/inputBars/PostInput.js';
import User from "./mockData/getPosts.json";


function App() {
  const [data, setData] = useState(User.user)
  
  useEffect(() => {
    //checking if user has been here, before.
    const prevSession = JSON.parse(localStorage.getItem('users'))
    //setting the data in localStorage
    prevSession ? setData(prevSession) : 
      localStorage.setItem("users", JSON.stringify(User.user));
  }, [])

  return (
    <div className="App">
      <PostInput data={data} setData={setData} />
      <Posts data={data} setData={setData} />
    </div>
  );
}

export default App;
