import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Planets from "../component/planets";
import Vehicles from "../component/vehicles";
import { Navbar } from "../component/navbar";
import Characters from "../component/characters";
export const Home = () => {
	const { store, actions } = useContext(Context);


	const [state, setState] = useState({});
	useEffect(() => {
		actions.obtenerplanetas();
		actions.obtenerPersonajes();
		actions.obtenerVehiculosClaudia();
	}, []);


	return (
		<div className="mt-5">
			<h1 className="text-danger d-flex justify-content-center my-3">Characters</h1>
			<div className="row d-flex justify-content-center">
				{store.characters.map((item, index) => (
						<Characters
							name={item.name}
							gender={item.gender}
							haircolor={item.hair_color}
							eyecolor={item.eye_color}
							id={index + 1}
						/>
				))}
			</div>

			<ul className=" m-0 p-0 d-flex flex-wrap horizontal-scrollable" id="contact-list"  >
				{store.Planets.map((item, index) => (
					<Planets
						name={item.name}
						population={item.population}
						terrain={item.terrain}
						id={index}
					/>
				))}
			</ul>


			{/* //vechículos */}
			{store.vehiculos.map((item, index) =>

				<Vehicles
					name={item.name}
					model={item.model}
					passengers={item.passengers}
					id={index + 1}
				/>

			)}
			


		</div>
	);
};
