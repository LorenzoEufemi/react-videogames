import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';



function AppFooter() {
  return (
    <footer className="text-white pt-5 pb-3 mt-auto" style={{ backgroundColor: '#1c1f24' }}>
      <div className="container">
        <div className="row">

          {/* Logo e descrizione */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">🎮 GameZone</h5>
            <p>
              Il tuo portale per scoprire, recensire e seguire tutti i videogiochi del momento.
              Unisciti alla nostra community di gamer!
            </p>
          </div>

          {/* Link utili */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold">Link Utili</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/giochi" className="text-white text-decoration-none">Giochi</a></li>
              <li><a href="/recensioni" className="text-white text-decoration-none">Recensioni</a></li>
              <li><a href="/contatti" className="text-white text-decoration-none">Contatti</a></li>
            </ul>
          </div>

          {/* Contatti */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">Contatti</h6>
            <p><i className="bi bi-envelope"></i> info@gamezone.it</p>
            <p><i className="bi bi-geo-alt"></i> Via Pixel 101, Roma</p>
            <p><i className="bi bi-phone"></i> +39 012 3456789</p>
          </div>

          {/* Social media */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">Seguici</h6>
            <div className="d-flex gap-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} GameZone. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;