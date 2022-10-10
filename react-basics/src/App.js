
import "./App.css";
import Component1 from "./components/component1";
import Component2 from "./components/component2";
import Component3 from "./components/component3";
import Component4 from "./components/component4";
import { Component5 } from "./components/component5";
import { MovieCart } from "./components/movie-cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <MovieCart />
    </div>
  );
}

export default App;
