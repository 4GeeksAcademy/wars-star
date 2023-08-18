import React from "react";

const Characters = () => {
    return (
        <div className="container-fluid w-100 row">
            <div class="card col-3 px-0" style={{width: "18rem;"}}>
                <img src="https://img.particlenews.com/img/id/2WM95P_0n0JJ8NK00?type=thumbnail_1024x512" class="card-img-top mx-0" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Luke Skywalker</h5>
                    <p class="card-text">Gender: <span>male</span></p>
                    <p class="card-text" id="p-datos">Hair Color: <span>blonde</span></p>
                    <p class="card-text">Eye Color: <span>blue</span></p>
                    <a href="#" class="btn btn-primary">Learn More!</a><button className="btn btn-warning position-absolute bottom-0 end-0 my-3 mx-3"><i class="fa fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Characters;