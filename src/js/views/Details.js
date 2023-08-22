import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { useParams, useLocation } from 'react-router-dom';

export const Details = () => {
    const { store, actions } = useContext(Context);
    const [typeOfDetails, setTypeOfDetails] = useState();
    const [img, setImg] = useState("");
    const [info, setInfo] = useState({});

    const { id } = useParams();
    const pathName = useLocation().pathname;

    useEffect(() => {
        if (pathName.includes("characters")) {
            actions.getDetails("characters", id).then(() => {
                setInfo(store.details);
                setImg("https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg");
                setTypeOfDetails("characters");
            })
        };
        if (pathName.includes("planets")) {
            actions.getDetails("planets", id).then(() => {
                setInfo(store.details);
                console.log(id);
                setImg("https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg");



                setTypeOfDetails("planets");
            });
        }
        if (pathName.includes("vehicles")) {
            actions.getDetails("vehicles", id).then(() => {
                setInfo(store.details);
                setTypeOfDetails("vehicles");

            });
        }
    }, [id, pathName]);

    return (
        <div className="container align-items-center h-100">
            <div className="d-flex">
                <img src={img !== "" ? img : "https://yt3.googleusercontent.com/ytc/AOPolaT-60EgZMPStubu7XcNrZ9useOeTtyB-_yVsWvsAQ=s900-c-k-c0x00ffffff-no-rj"} width="280" height="280" />
                <div className="ms-4 text-center mt-3">
                    <h1>{info.name}</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                </div>
            </div>
            <div className="border-top h-10 my-4 border-danger"></div>
            <div className="d-flex justify-content-between text-danger text-center">
                {typeOfDetails === "characters" &&
                    <>
                        <div>
                            <p>Name</p>
                            <p>{info.name}</p>
                        </div>
                        <div>
                            <p>Birth Year</p>
                            <p>{
                                info.birth_year
                            }</p>
                        </div>
                        <div>
                            <p>Height</p>
                            <p>{
                                info.height
                            }</p>
                        </div>
                        <div>
                            <p>Skin Color</p>
                            <p>{
                                info.skin_color
                            }</p>
                        </div>
                        <div>
                            <p>Eye Color</p>
                            <p>{
                                info.eye_color
                            }</p>
                        </div>
                    </>}
                {typeOfDetails === "vehicles" &&
                    <>
                        <div>
                            <p>Name</p>
                            <p>{info.name}</p>
                        </div>
                        <div>
                            <p>Model</p>
                            <p>{
                                info.model
                            }</p>
                        </div>
                        <div>
                            <p>Length</p>
                            <p>{
                                info.length
                            }</p>
                        </div>
                        <div>
                            <p>Cost in credits</p>
                            <p>{
                                info.cost_in_credits
                            }</p>
                        </div>
                        <div>
                            <p>Consumables</p>
                            <p>{
                                info.consumables
                            }</p>
                        </div>
                    </>}
                {typeOfDetails === "planets" &&
                    <>
                        <div>
                            <p>Name</p>
                            <p>{info.name}</p>
                        </div>
                        <div>
                            <p>Created</p>
                            <p>{
                                info.created
                            }</p>
                        </div>
                        <div>
                            <p>Diameter</p>
                            <p>{
                                info.diameter
                            }</p>
                        </div>
                        <div>
                            <p>Climate</p>
                            <p>{
                                info.climate
                            }</p>
                        </div>
                        <div>
                            <p>Terrain</p>
                            <p>{
                                info.terrain
                            }</p>
                        </div>
                    </>}
            </div>
        </div>
    );
}