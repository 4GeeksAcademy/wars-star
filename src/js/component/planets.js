
import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";


const Planets = props => {

    const { store, actions } = useContext(Context);
    const [state, setState] = useState({
        //initialize state here
    });


    return (
        <>
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={"https://starwars-visualguide.com/assets/img/planets/" + (props.id + 1) + ".jpg"} className="card-img-top" alt="..." />
                    <div className="card-body m-0 p-0" style={{ height: "170px" }}>
                        <h5 className="card-title fs-4 text">{props.name}</h5>
                        <p className="card-text text-start">{props.population}</p>
                        <p className="card-text text-start">{props.name}</p>
                        <Link href="#" className="btn border-primary position-absolute bottom-0 start-0  m-2 text-primary">Learn more!</Link>
                        <Link href="#" className="btn position-absolute bottom-0 end-0 m-2 border-warning"><i className="fa fa-heart text-warning border-warning"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}


Planets.propTypes = {
    name: PropTypes.string,
    population: PropTypes.string,
    terrain: PropTypes.string,
    id: PropTypes.string,

};

Planets.defaultProps = {
    onDelete: null
};


export default Planets;

