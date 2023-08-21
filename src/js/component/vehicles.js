import React, { useEffect, useContext } from "react"
import { Context } from "../store/appContext"
import Planets from "./planets"
import PropTypes from "prop-types";




const Vehicles = (props) => {
    const { store, actions } = useContext(Context)
    const images = ["https://lumiere-a.akamaihd.net/v1/images/sandcrawler-bio-1_11fee365.jpeg?region=342%2C73%2C938%2C474", "https://static.wikia.nocookie.net/esstarwars/images/f/f2/T-16_skyhopper_-_SW_20.png/revision/latest?cb=20181201201037", "https://static.wikia.nocookie.net/starwars/images/7/7b/MarkIIMediumBlaster-SWL36.jpg/revision/latest?cb=20220102162324", "https://static.wikia.nocookie.net/starwars/images/e/e2/TIE-Fighter-RO-SWCT.png/revision/latest/scale-to-width-down/705?cb=20170506062919", "https://static.wikia.nocookie.net/starwars/images/0/0d/Snowspeeder.png/revision/latest?cb=20161110010008", "https://static.wikia.nocookie.net/esstarwars/images/1/17/TIE_Bomber_BF2.png/revision/latest?cb=20171101030957", "https://static.wikia.nocookie.net/starwars/images/9/9a/AT-ACT_RO.png/revision/latest?cb=20220915023046", "https://static.wikia.nocookie.net/starwars/images/f/ff/ATST-SWBdice.png/revision/latest?cb=20230723050455", "https://static.wikia.nocookie.net/starwars/images/3/3b/Cloud-car-v2.png/revision/latest?cb=20160617064429", "https://static.wikia.nocookie.net/esstarwars/images/4/42/Eclipsesb.JPG/revision/latest?cb=20120527170232"]




    return (

        <div className="card" style={{ width: "18rem" }}>
            <img src={props.id <= 10 ? images[props.id - 1] : ""} className="card-img-top img-thumbnail" id="imgStyle" alt="..." />
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





