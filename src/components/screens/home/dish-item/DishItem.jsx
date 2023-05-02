import {Link} from "react-router-dom";
import Price from "./Price.jsx";

function DishItem({dish}) {

    return (
        <div key={dish.id} className='catalog__card'>
            <div className='catalog__dish-photo'
                 style={{
                     backgroundImage: `url(${dish.image})`
                 }}/>
            <div className='catalog__wrapper-text'>
                <h2 className='catalog__card-header'>{dish.name}</h2>
                <Price price={dish.price}/>
                <Link className='button-global' to={`/dish/${dish.id}`}>More about dish</Link>
            </div>
        </div>
    )
}

export default DishItem;