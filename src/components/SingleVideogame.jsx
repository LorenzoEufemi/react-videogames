import { useNavigate } from "react-router-dom";

// src/components/SingleVideogame.jsx
const SingleVideogame = ({ game }) => {
  const navigate = useNavigate();
  if (!game) {
    return <p>Loading...</p>;
  }

  return (
    <section className="container p-5 text-center d-flex justify-content-center align-items-center min-vh-100">
      {/* Card del gioco */}

      <div className="card" style={{ width: '18rem' }}>
        {/* Immagine del gioco */}
        <img src={`http://127.0.0.1:8001/storage/${game.image}`} className="card-img-top" alt={game.title} />

        <div className="card-body">
          {/* Titolo del gioco */}
          <h5 className="card-title">{game.title}</h5>

          {/* Descrizione */}
          <p className="card-text">{game.description}</p>

          {/* Genere e modalità */}
          <p><strong>Genere:</strong> {game.genre}</p>
          <p><strong>Modalità:</strong> {game.mode}</p>

          {/* Sviluppatore */}
          <p><strong>Sviluppatore:</strong> {game.developer}</p>

          {/* Badge per le piattaforme */}
          <div>
            <strong>Piattaforme:</strong>
            {game.platforms && game.platforms.length > 0
              ? game.platforms.map((platform, index) => (
                <span key={index} className="badge " style={{ backgroundColor: platform.color }}>{platform.name}</span>
              ))
              : 'N/A'}
          </div>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-outline-primary mt-2" onClick={() => navigate(-1)}>
            Torna indietro
          </button>
        </div>
      </div>
      
    </section>


  );
};

export default SingleVideogame;
