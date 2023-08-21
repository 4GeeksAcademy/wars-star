const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Planets: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeDataClaudia: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadSomeDataCecilia: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			obtenerplanetas: async function (setStore) {
				//accion, funcion que puedo volver a utilizar cuando quiera
				try {
					let response = await fetch("https://www.swapi.tech/api/planets/1"); //esto me regresa una respuesta, que la guerdo en un espacio de memoira
					//le digo que espere por esa respuesta
					let data = await response.json(); //le digo que convierta esa respuesta en un jason y lo guardo en un espacio de memoira y que espere por la convercion de esa respuesta
					console.log(data);
					setStore({ Planets: data }); //({propiedad:el valor que quiero actuaizar})
				} catch (error) {
					console.log(error);
				}
			},
			loadSomeDataAgustin: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadSomeDataCristian: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;





