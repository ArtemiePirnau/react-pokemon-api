import { useContext } from "react";
import { AppContext } from "../../Context/AppProvider.jsx";
import PokemonCart from "../PokemonCart/PokemonCart.jsx";
import "../App/App.scss";
const PokemonList = () => {
  const { getPokemonList, allPokemons } = useContext(AppContext);

  return (
    <div className="list">
      <div className="wrapper">
        <div className="pokemon-wrapper">
          {allPokemons.map((pokemonStats, index) => (
            <PokemonCart
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
              weight={pokemonStats.weight}
              ability={pokemonStats.abilities[0].ability.name}
            />
          ))}
        </div>
        <button className="load-more" onClick={() => getPokemonList()}>
          Load more
        </button>
      </div>
    </div>
  );
};
export default PokemonList;
