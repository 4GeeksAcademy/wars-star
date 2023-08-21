import React from "react";



const Planets = () => {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://www.radiomontecarlo.com.uy/imgs/articulos/articulos30_97678.jpg" className="card-img-top" alt="..." />
                <div className="card-body" style={{ height: "170px" }}>
                    <h5 className="card-title fs-4 text">Planeta</h5>
                    <p className="card-text text-start">Population: 49588393</p>
                    <p className="card-text text-start">Terrain</p>
                    <a href="#" className="btn border-primary position-absolute bottom-0 start-0  m-2 text-primary">Learn more!</a>
                    <a href="#" className="btn position-absolute bottom-0 end-0 m-2 border-warning"><i className="fa fa-heart text-warning border-warning"></i></a>
                </div>
            </div>
        </div>
    )
}



export default Planets;