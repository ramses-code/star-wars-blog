import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "../../styles/index.css";

const planetPlanet = () => {

    const params = useParams()

    const [planet, setPlanet] = useState("");
    const planetUrl = 'https://www.swapi.tech/api/planets/'+params.uid;
    const imgUrl = "https://starwars-visualguide.com/assets/img/planets";
    const defaultImg = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";

    useEffect(() => {
        fetch(planetUrl).then(res => res.json()).then(data => setPlanet(data)).catch(err => err)
    },[])

    return (
        <div className='container'>
            {planet === "" ? <h1>Cargando...</h1> :
            <div className='row'>
                <div className='col-12 col-md-8 col-lg-6'>
                <img src={`${imgUrl}/${planet.result.uid}.jpg`}
                onError={(e) => (e.target.onerror = null, e.target.src = defaultImg)}/>
                </div>
                <div className='col-12 col-md-4 col-lg-6'>
                    <h1 id='name'>{planet.result.properties.name}</h1>
                    <section>
                    <article className='item'>
                        <p className='key'>Diameter: </p><p className='value'>{planet.result.properties.diameter}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Rotation period: </p><p className='value'>{planet.result.properties.rotation_period}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Gravity: </p><p className='value'>{planet.result.properties.gravity}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Population: </p><p className='value'>{planet.result.properties.population}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Climate: </p><p className='value'>{planet.result.properties.climate}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Terrain: </p><p className='value'>{planet.result.properties.terrain}</p>
                    </article>
                    <article className='item'>
                        <p className='key'>Surface water: </p><p className='value'>{planet.result.properties.surface_water}</p>
                    </article>
                    </section>
                </div>
            </div>
            }
    </div>
    )
}

export default planetPlanet;