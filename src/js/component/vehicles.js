import React, { useEffect, useContext } from "react"
import { Context } from "../store/appContext"
import Planets from "./planets"
import PropTypes from "prop-types";




const Vehicles = (props) => {
    const { store, actions } = useContext(Context)




    return (

        <div className="card" style={{ width: "18rem" }}>

            <img src="https://files.cults3d.com/uploaders/4434823/illustration-file/1450688883-1419-6018/Capture_d_e_cran_2015-12-21_a__10.03.30.png" className="card-img-top img-thumbnail" style={{ width: "400" }} alt="..." />
            <div className="card-body">

                <h5 className="card-title text-left text-black">{props.name}</h5>
                <p className="card-text">{props.model}</p>
                <p className="card-text">{props.passengers}</p>
                <a href="#" className="btn btn-outline-primary">Learn more!</a>
                <button type="button" className="btn btn-outline-warning position-absolute bottom-0 end-0 my-3 me-2"><i class="fa fa-heart"></i></button>
            </div>
        </div>

    )
}

Vehicles.propTypes = {
    name: PropTypes.string,
    model: PropTypes.string,
    passengers: PropTypes.string,
    id: PropTypes.string,

};

Vehicles.defaultProps = {
    onDelete: null
};

export default Vehicles;





