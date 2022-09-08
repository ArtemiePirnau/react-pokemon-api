import { createContext, useState } from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon");

  const getPokemonList = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    const createPokemon = (results) => {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    };
    createPokemon(data.results);
  };

  return (
    <AppContext.Provider
      value={{
        getPokemonList,
        allPokemons,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
