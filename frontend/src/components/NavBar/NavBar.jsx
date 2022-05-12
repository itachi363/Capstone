import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <header className="fixed">
      <div className="navBar">
        <ul>
          <li className="brand">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <b>Snack Box</b>
            </Link>
          </li>
          <li>
            <Link to="/survey" style={{ textDecoration: "none", color: "white" }}>
              <b>Survey</b>
            </Link>
          </li>
          <li>
            <Link to="/budget" style={{ textDecoration: "none", color: "white" }}>
              <b>Budget</b>
            </Link>
          </li>
          <li>
            {user ? (
              <button onClick={logoutUser}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
