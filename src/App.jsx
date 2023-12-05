import "./App.css";

// CONDITIONAL RENDERING
// with conditonal rendering we can render different things based on different conditions
// we can use if statements, ternary operator, && operator and that comes from javascript

const num = 11;
// if (num > 9) {
//   console.log("num > 9");
// }
// num > 9 && console.log("num > 9");
// num > 21 ? console.log("num > 9") : console.log("num <= 21");

function App() {
  // return <>{num > 9 && <h1>num 9</h1>}</>;
  return <>{num % 2 === 0 ? <p>number is even</p> : <p>number is odd</p>}</>;
}

export default App;
