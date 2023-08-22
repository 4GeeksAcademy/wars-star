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
		<div className="mt-5 ">
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
				))},
			</div>
			<h1 className="text-danger d-flex justify-content-center my-3">Planets</h1>
	
			<div className="row d-flex justify-content-center">
				{store.Planets.map((item, index) => (
					
					<Planets
						name={item.name}
						population={item.population}
						terrain={item.terrain}
						id={index}
					/>
				))}
			</div>


			{/* //vechículos */}
			<h1 className="text-danger d-flex justify-content-center my-3">Vehicles</h1>

			<div className="row d-flex justify-content-center">

			{store.vehiculos.map((item, index) =>
				
				<Vehicles
					name={item.name}
					model={item.model}
					passengers={item.passengers}
					id={index + 1}
				/>
				

			)}

</div>


		</div>
	);
};
