import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "../PokemonList/PokemonList.jsx";
import SinglePokemon from "../SinglePokemon/SinglePokemon.jsx";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/:name" element={<SinglePokemon />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
