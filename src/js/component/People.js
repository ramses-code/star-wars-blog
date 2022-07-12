import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

const People = (props) => {

    const {store, actions} = useContext(Context);

    let changeLike = () => {
        let index = store.favorites.findIndex(elem => elem.name == props.name);
        if (index == -1) return true;
        else return false;
    }

    const imgUrl = "https://starwars-visualguide.com/assets/img/characters";
    const single = "/singleCharacter/"+ props.uid;

    return (
        <div className="card" style={{width: "300px"}}>
            <img id='img' src={`${imgUrl}/${props.uid}.jpg`} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"><br/></p>
                <Link to={single}>
                <button className="btn btn-primary">Learn more!</button>
                </Link>
                {changeLike() ? 
                <button id='likesButton' type="button" className="btn btn-outline-warning" 
                onClick={() => (actions.addFavorites({'name': props.name, 'uid': props.uid, 'type': 'character'}))}>
                <i className="far fa-heart"></i>
                </button>:

                <button id='likesButton' type="button" className="btn btn-outline-warning" 
                onClick={() => actions.handleLikes(props.name)}>
                <i className="fa fa-heart"></i>
                </button>
            }
            </div>
        </div>
    )
}

export default People