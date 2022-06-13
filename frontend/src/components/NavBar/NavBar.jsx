import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import "./NavBar.css";

//<<<<<<<<<<<<< Import of Icons >>>>>>>>>>>>//


const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="wrapper">
          <div>     <ul>
                <li className="brand">
                  <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                   <b>Rennie Tillis Collection</b>
                  </Link>
                </li>
                <li>
                  {user ? (
                    <button onClick={logoutUser}>Logout</button>
                    ) : (
                      <button onClick={() => navigate("/login")}>Login</button>
                      )}
                </li>
              {/* <LanguageOutlinedIcon className="icon"/>           */}
             </ul>
         </div>  
      </div>
    </div>
  );
};

export default Navbar;
