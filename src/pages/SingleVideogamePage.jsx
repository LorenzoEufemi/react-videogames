// src/pages/SingleVideogamePage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleVideogame from "../components/SingleVideogame";

const SingleVideogamePage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8001/api/games/${id}`) // cambia con la tua URL
      .then(res => setGame(res.data.data))
      .catch(err => console.error(err));
  }, [id]);

  return game ? <SingleVideogame game={game} /> : <p>Loading...</p>;
};

export default SingleVideogamePage;