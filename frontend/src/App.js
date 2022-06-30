import './App.css';
import { LargeCard } from "./components/cards/largeCard.js"
import { SmallCard } from "./components/cards/smallCard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World! </h1>
      </header>
      <div>
        <h2> Feed </h2>
        {/* this is the newest post -create component*/}
        <LargeCard/>
        {/* this is the next newest post -create component */}
        <SmallCard/>
      </div>
    </div>
  );
}

export default App;
