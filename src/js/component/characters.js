import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


const Characters = props => {
    const { store, actions } = useContext(Context); // para manejar data de flux

    // function handleFavorito(name) {
    //     actions.agregarFavorito()   


    // }

    return (

        <div class="card col-2 px-0 mx-3 mb-3 bg-black text-white border-light" style={{ width: "18rem;" }}>
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + props.id + ".jpg"} class="card-img-top mx-0" alt="..." />
            <div class="card-body ">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text my-0">Gender: <span>{props.gender}</span></p>
                <p class="card-text my-0" id="p-datos">Hair Color: <span>{props.haircolor}</span></p>
                <p class="card-text">Eye Color: <span>{props.eyecolor}</span></p>
                <div className="d-flex justify-content-between">
                    <Link to={"/details/characters/" + props.id} class="btn btn-outline-primary">Learn More!</Link>
                    <button className="btn btn-outline-warning" onClick={() => actions.agregarFavorito(props.name)}>
                        <i class="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

Characters.PropTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    haircolor: PropTypes.string,
    eyecolor: PropTypes.string,
    id: PropTypes.string
}

export default Characters;