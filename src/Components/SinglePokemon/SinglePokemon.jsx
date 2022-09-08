import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App/App.scss";

const SinglePokemon = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const getBack = () => navigate("/", { replace: true });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [name]);

  return (
    <div className="single">
      {data && (
        <div className={`${data.types[0].type.name} single__pokemon`}>
          <img
            className="single__img"
            src={data.sprites.other.dream_world.front_default}
            alt=""
          />
          <div className="single__pokemon-info">
            <h1 className="single__pokemon-name">{data.name}</h1>
            <p className="single__pokemon-id">
              Order: <span>#{data.order}</span>
            </p>
            <ul className="characteristics__list">
              <li className="characteristics__item">
                Type : {data.types[0].type.name}
              </li>
              <li className="characteristics__item">Weight : {data.weight}</li>
              <li className="characteristics__item">Height : {data.height}</li>
              <li className="characteristics__item">
                Base Experience : {data.base_experience}
              </li>
            </ul>
            <button className="single__btn" onClick={getBack}>
              Get Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default SinglePokemon;
