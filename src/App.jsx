import "./App.css";

function App() {
  return (
    <>
      {/* React Fragment */}
      {/* if we need n HTML container to wrap one ore more elements, we can use a fragment to gain performance (a div costs more performance) */}
      <h1 className="text-align-center">Beaches</h1>
      <p>text</p>
    </>
  );
}

export default App;
