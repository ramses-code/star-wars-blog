import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";

const Navbar = () => {

	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 sticky-top">
			<div className="container">
				<Link to="/">
					<img id="logo" src="https://www.kindpng.com/picc/m/133-1335374_molde-letras-star-wars-hd-png-download.png"/>
				</Link>

				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Favorites 
						<span className="badge badge-light ml-2">{store.favorites.length}</span>
					</button>
					<div className="dropdown-menu bg-light">
						{store.favorites.map((item, index) => {
							return (<p id="fav" className="dropdown-item" key={index}>{item.name} 
										<i  id="trash" className="fa fa-trash" onClick={() => (actions.deleteFavorites(index))}></i>
									</p>);
						})}
						<div className="dropdown-divider"></div>
						<p className="dropdown-item mb-0">{store.favorites.length}  favorites added</p>
					</div>
				</div>

			</div>		
		</nav>
	);
};

export default Navbar;