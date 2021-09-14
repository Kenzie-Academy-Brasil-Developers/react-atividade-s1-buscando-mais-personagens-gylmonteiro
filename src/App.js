import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [next]);

  const nextPage = () => {
    if (next <= 33) {
      setNext(next + 1);
    }
  };

  const previusPage = () => {
    if (next > 1) {
      setNext(next - 1);
      console.log("funciona");
    }
  };
  console.log(next);
  return (
    <div className="App">
      <header className="App-header">
        <Characters characterList={characterList} />
        <button onClick={nextPage}>Next</button>
        <button onClick={previusPage}>Previus</button>
      </header>
    </div>
  );
}

export default App;
