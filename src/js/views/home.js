import React from "react";

import "../../styles/home.css";

import { Navbar } from "../component/navbar";
import Planets from "../component/planets";
import Vehicles from "../component/vehicles";
import Characters from "../component/characters";

export const Home = () => (
	<div className="mt-5">
		<Planets />
		<Characters />
		<Vehicles />
	</div>
)