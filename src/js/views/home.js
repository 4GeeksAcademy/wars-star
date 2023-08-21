import React from "react";

import "../../styles/home.css";

import { Navbar } from "../component/navbar";
import Planets from "../component/planets";
import Vehicles from "../component/vehicles";
import Characters from "../component/characters";

export const Home = () => {

	const { store, actions } = useContext(Context);


	const [state, setState] = useState({

	});
	useEffect(() => {
		actions.obtenerplanetas();
	}, []);
	return (

	<div className="mt-5">
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

		<Characters









		/>
		<Vehicles









		/>
	</div>
)}