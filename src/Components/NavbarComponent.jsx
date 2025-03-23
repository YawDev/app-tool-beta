import Home from "../Pages/Home"
import SignUp from "../Pages/SignUp"

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function NavbarComponent() {

  return (
    <div>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="/">  <img src="./react.svg" /></a>
  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> 
              <li className="nav-item active">
                <a className="nav-link custom-link" href="#">Manage Tool</a>
                </li>
                
                <li className="nav-item active">
                <a className="nav-link custom-link" href="/signup">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
      </Router>
      </div>
      )
  }
  
  export default NavbarComponent
  