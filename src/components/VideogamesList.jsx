// src/components/VideogamesList.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const VideogamesList = ({ games }) => {
  return (
    <div className="container pt-5">
      <h2 className="text-center mb-3">Videogames</h2>
      <p className="text-center text-muted"><em>Scopri i nostri videogiochi più popolari!</em></p>
      <div className="row">
        {games.map((game, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card h-100 d-flex flex-row align-items-center p-3">
              {/* Immagine a sinistra */}
              <img
                src={`http://127.0.0.1:8001/storage/${game.image}`}
                alt={game.title}
                style={{ width: '100px', height: 'auto', objectFit: 'cover', marginRight: '15px' }}
              />

              {/* Testo a destra */}
              <div>
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text">
                  <strong>Modalità:</strong> {game.mode}<br />
                  <strong>Genere:</strong> {game.genre}
                </p>
                <Link to={`/videogames/${game.id}`} className="btn btn-outline-success btn-sm">
                  Dettagli
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideogamesList;

