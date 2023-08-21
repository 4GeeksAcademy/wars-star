import React from "react";



const  Vehicles = () => {
    return(

        <div className="card" style={{width: "18rem"}}>
            <h1 className="card-title text-left text-danger"> Vehicles</h1>
        <img src="https://files.cults3d.com/uploaders/4434823/illustration-file/1450688883-1419-6018/Capture_d_e_cran_2015-12-21_a__10.03.30.png" className="card-img-top img-thumbnail"  style={{width: "400" }}alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-left text-black">Naves</h5>
            <p className="card-text">Marca</p>
            <a href="#" className="btn btn-outline-primary">Learn more!</a>
            <button type="button" className="btn btn-outline-warning position-absolute bottom-0 end-0 my-3 me-2"><i class="fa fa-heart"></i></button>
        </div>
        </div>

    )
}

export default Vehicles;





