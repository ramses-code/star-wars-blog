const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: () => {
				fetch('https://www.swapi.tech/api/people').then(res => res.json()).then(data =>{
					setStore({people: data.results})
				}).catch();
			},

			getPlanets: () => {
				fetch('https://www.swapi.tech/api/planets').then(res => res.json()).then(data =>{
					setStore({planets: data.results})
				}).catch();
			},

			getVehicles: () => {
				fetch('https://www.swapi.tech/api/vehicles').then(res => res.json()).then(data =>{
					setStore({vehicles: data.results})
				}).catch();
			},

			addFavorites: (newFav) => {
				const store = getStore();
				setStore({favorites: [...store.favorites, newFav]})
			},

			deleteFavorites: (fav) => {
				const store = getStore();
				store.favorites.splice(fav, 1);
				setStore({favorites: [...store.favorites]})
			},

			handleLikes: (name) => {
				const store = getStore();
				let index = store.favorites.findIndex(elem => elem.name == name);
				store.favorites.splice(index, 1);
				setStore({favorites: store.favorites});
			}
		}
	};
};

export  default getState;
