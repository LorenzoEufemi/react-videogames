function AppHeader() {
    return (
      <header className="custom-header d-flex flex-wrap justify-content-between align-items-center">
      
      <div className="d-flex align-items-center">
        <span className="fs-4 me-3">🎮 <strong>GameZone</strong></span>
        
        <div>
          <a href={`/`}>Home</a>
          <a href={`/videogames`}>Videogames</a>
        </div>
      </div>

    </header>
    );
  }
  
  export default AppHeader;