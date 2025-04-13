// src/components/VideogamesList.jsx
import { Link } from "react-router-dom";

const VideogamesList = ({ games }) => {
  return (
    <div className="container pt-3  pb-5">
      <h1 className="text-center mb-4">Videogames</h1>
      <p className="text-center mb-4"><em>Scopri i nostri videogiochi più popolari!</em></p>
      <div className="row g-4 ">
        {games.map((game, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text"><strong>Modalità:</strong> {game.mode}</p>
                <p className="card-text"><strong>Genere:</strong> {game.genre}</p>
                <Link to={`/videogames/${game.id}`} key={game.id} className="btn btn-outline-success">Dettagli</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideogamesList;

