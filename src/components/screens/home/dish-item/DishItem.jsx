import {Link} from "react-router-dom";

function DishItem({dish}) {

    return (
        <div key={dish.id} className='catalog__card'>
            <div className='catalog__dish-photo'
                 style={{
                     backgroundImage: `url(${dish.image})`
                 }}/>
            <div className='catalog__wrapper-text'>
                <h2 className='catalog__card-header'>{dish.name}</h2>
                <p className='catalog__card-text'>
                    {new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(dish.price)}
                </p>
                <Link className='button-global' to={`/dish/${dish.id}`}>More about dish</Link>
            </div>
        </div>
    )
}

export default DishItem;