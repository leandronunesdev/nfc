import "./App.css";
import Nfc from "nfc-react-web";

function App() {
  return (
    <div className="App">
      <p>NFC Reader New</p>
      <Nfc
        read={(data) => {
          console.log(`Data read from tag: ${JSON.stringify(data)}`);
        }}
        timeout={15} // time to keep trying to read tags, in seconds
      />
    </div>
  );
}

export default App;
