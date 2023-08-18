import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<img id="local-nav-logo-desktop"  className="d-flex ms-5 " width= "100" src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"   />
			
          <a className=" dropdown-toggle btn btn-primary me-4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul className="dropdown-menu">
            
          </ul>
		</nav>
	);
};
