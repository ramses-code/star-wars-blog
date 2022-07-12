import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "../../styles/index.css";

const SingleVehicle = () => {

    const params = useParams();
    const [vehicle, setVehicle] = useState("");
    const vehicleUrl = 'https://www.swapi.tech/api/vehicles/'+params.uid;
    const imgUrl = "https://starwars-visualguide.com/assets/img/vehicles/";

    useEffect(() => {
        fetch(vehicleUrl).then(res => res.json()).then(data => setVehicle(data)).catch(err => err)
    },[])

    return (
        <div className='container'>
            {vehicle === "" ? <h1>Cargando...</h1> :
            <div className='row'>
                <div className='col-12 col-md-8 col-lg-6'>
                <img id='singleImg' src={`${imgUrl}/${vehicle.result.uid}.jpg`}/>
                </div>
                <div className='col-12 col-md-4 col-lg-6'>
                    <h1 id='name'>{vehicle.result.properties.name}</h1>
                    <section>
                    <article className='item'>
                        <p className='key'>Model: </p><p className='value'>{vehicle.result.properties.model}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Vehicle class: </p><p className='value'>{vehicle.result.properties.vehicle_class}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Manufacturer: </p><p className='value'>{vehicle.result.properties.manufacturer}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Cost in credits: </p><p className='value'>{vehicle.result.properties.cost_in_credits}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Length: </p><p className='value'>{vehicle.result.properties.length}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Crew: </p><p className='value'>{vehicle.result.properties.crew}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Passengers: </p><p className='value'>{vehicle.result.properties.passengers}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Max atmosphering speed: </p><p className='value'>{vehicle.result.properties.max_atmosphering_speed}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Cargo capacity: </p><p className='value'>{vehicle.result.properties.cargo_capacity}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Consumables: </p><p className='value'>{vehicle.result.properties.consumables}</p>
                    </article>
                    </section>
                </div>
            </div>
            }
    </div>
    )
}

export default SingleVehicle;