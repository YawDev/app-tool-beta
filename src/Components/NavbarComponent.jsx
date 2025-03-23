
function NavbarComponent() {

    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#">  <img src="./react.svg" /></a>
  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> 
              <li className="nav-item active">
                <a className="nav-link custom-link" href="#">Manage Tool</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
      </div>
      )
  }
  
  export default NavbarComponent
  