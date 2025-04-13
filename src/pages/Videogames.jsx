// src/pages/Videogames.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import VideogamesList from "../components/VideogamesList";

const Videogames = () => {
  const [videogames, setVideogames] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8001/api/games")
  .then(res => setVideogames(res.data.data))
  .catch(err => console.error(err));
  }, []);

  return <VideogamesList games={videogames} />;
};

export default Videogames;