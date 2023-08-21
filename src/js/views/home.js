import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import Planets from "../component/planets.js";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Vehicles from "../component/vehicles"

export const Home = () => {
	const { store, actions } = useContext(Context);


	const [state, setState] = useState({

	});
	useEffect(() => {
		actions.obtenerplanetas();
		actions.obtenerVehiculosClaudia();
	}, []);


	return (
		<div className=" mt-5 container ">

			<ul className=" m-0 p-0 d-flex flex-wrap horizontal-scrollable " id="contact-list"  >
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
			<ul className= "d-flex overflow-x-scroll" >
		
			{store.vehiculos.map((item, index) =>
				<li>
				<Vehicles
					name={item.name}
					model={item.model}
					passengers={item.passengers}
					id={index}
				/>
				</li>

			)}

</ul>


		</div>

	);
};
