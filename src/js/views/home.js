import React, { useContext } from "react";
import People from "../component/People";
import Vehicles from "../component/Vehicles";
import Planets from "../component/Planets";
import { Context } from "../store/appContext";
import "../../styles/index.css";

const Home = () => {

    const {store, actions} = useContext(Context);
    let scrollStyle = {
        overflowX: "scroll",
        overflowY: "white",
        alignItems: "center",
    }
    return (
        <div className="container">
            
            <h1>Characters</h1>
                <div className="d-flex flex-row" style={scrollStyle}>
                    {store.people.map((item, index) => {
                    return (
                        <div className="col-12 col-md-8 col-lg-4" key={index}>
                            <People  name={item.name} uid={item.uid} gender={item.gender}/>
                        </div>
                    )
                    })}
                </div>

            <h1>Planets</h1>
            <div className="d-flex flex-row" style={scrollStyle}>
                    {store.planets.map((item, index) => {
                    return (
                        <div className="col-12 col-md-8 col-lg-4" key={index}>
                            <Planets name={item.name} uid={item.uid}/>
                        </div>
                    )
                    })}
            </div>

                <h1>Vehicles</h1>
                <div className="d-flex flex-row" style={scrollStyle}>
                    {store.vehicles.map((item, index) => {
                    return (
                        <div className="col-12 col-md-8 col-lg-4" key={index}>
                            <Vehicles name={item.name} uid={item.uid}/>
                        </div>
                    )
                    })}
            </div>
        </div>
    )
}
export default Home;