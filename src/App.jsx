import "./App.css";
import ImageContainer from "./components/ImageContainer";
import beaches from "./data/beaches.json";

function App() {
  return (
    <>
      <h1 className="text-align-center">Beaches</h1>
      {beaches.map((beach) => {
        return (
          <ImageContainer
            key={crypto.randomUUID()}
            {...beach}
            // title={beach.title}
            // imageSrc={beach.imageSrc}
            // description={beach.description}
            // classValue="beach-container"
            // annualVistors={beach.annualVistors}
          />
        );
      })}
    </>
  );
}

export default App;
