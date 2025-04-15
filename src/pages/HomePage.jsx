import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="bg-dark text-white vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3">
            <h1 className="display-3 fw-bold">Benvenuto su GameZone</h1>
            <p className="lead mt-4 mb-5">
                Immergiti nel mondo dei videogiochi con notizie, curiosità e contenuti esclusivi.
                La tua avventura parte da qui.
            </p>
            
            <Link to={`/videogames`} className="btn btn-primary btn-lg px-5">
                Vai ai Videogiochi
            </Link>
        </div>
    );
}
export default HomePage;

