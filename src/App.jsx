import "./App.css";
import ImageContainer from "./components/ImageContainer";

function App() {
  const beachName = "Marina di Pescoluse ";
  return (
    <>
      <h1 className="text-align-center">Beaches</h1>
      <ImageContainer
        classValue="beach-container" // in JSX if we have to write a "string" we don't need to use {}
        title={`${beachName} - Salento`} // if using template literals we need to use {}
        imageSrc="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNofGVufDB8fDB8fHww"
        description="lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, eius! Dolorum dolorem placeat nulla! Itaque, labore sapiente aliquid assumenda sed, quas nulla fuga recusandae quo voluptas asperiores ullam odio! Iusto."
        annualVistors={2000000}
      />

      <ImageContainer
        classValue="beach-container"
        title="Maya Bay - Thailand"
        imageSrc="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww"
        description="lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, eius! Dolorum dolorem placeat nulla! Itaque, labore sapiente aliquid assumenda sed, quas nulla fuga recusandae quo voluptas asperiores ullam odio! Iusto."
        annualVistors={123324000}
      />

      <ImageContainer
        classValue="beach-container"
        title="Fiji - Oceania"
        imageSrc="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww"
        description="lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, eius! Dolorum dolorem placeat nulla! Itaque, labore sapiente aliquid assumenda sed, quas nulla fuga recusandae quo voluptas asperiores ullam odio! Iusto."
        annualVistors={6664000}
      />
    </>
  );
}

export default App;
