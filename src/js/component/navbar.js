import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {

  const { store, actions } = useContext(Context);
  const [listaFavoritos, setlistafavoritos] = useState([])
  useEffect(function () {
    //  setlistafavoritos(store.favoritos)


  }, [])
  // console.log(listaFavoritos);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <img id="local-nav-logo-desktop" className="d-flex ms-5 " width="100" src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" />

      <a className=" dropdown-toggle btn btn-primary me-4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Favorites {store.favoritos.length}
      </a>
      <ul className="dropdown-menu end-0 position-absolute top-0 end-0 d-flex align-items-end flex-column bd-highlight mb-3">
        {store.favoritos.map(name => (
          <li className="mt-auto p-2 bd-highlight my-5"> {name}</li>

        ))}
      </ul>
    </nav>
  );
};
