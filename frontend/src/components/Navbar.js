import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container">
        <NavLink className="navbar-brand" to="/" style={{color:"black"}}>NoteVault</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item"><NavLink className="nav-link" to="/" style={{color:"black"}}>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about" style={{color:"black"}}>About</NavLink></li>
          </ul>
          <div className="d-flex">
            {localStorage.getItem("token") ? (
              <button className="btn btn-dark" onClick={handleLogout}>Logout</button>
            ) : (
              <>
                <NavLink className="btn btn-dark me-2" to="/login">Login</NavLink>
                <NavLink className="btn btn-dark" to="/signup">Sign up</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
