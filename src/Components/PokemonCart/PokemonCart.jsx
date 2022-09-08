import { Link } from "react-router-dom";
import "../App/App.scss";
const PokemonCart = ({ id, image, name, type, weight, ability }) => {
  const style = type + " type";
  return (
    <Link className={style} to={`/${name}`}>
      <img className="pokemon__image" src={image} alt="" />
      <p className="pokemon__id">#{id}</p>
      <h3 className="pokemon__name">{name}</h3>
      <p className="pokemon__weight">Weight: {weight}</p>
      <p className="pokemon__ability">Ability: {ability}</p>
    </Link>
  );
};
export default PokemonCart;
