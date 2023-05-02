import {Link, useLocation, useParams} from "react-router-dom";
import {useState} from "react";
import {dishes as dishesData} from "../home/dishes.data.js";
import DishItem from "../home/dish-item/DishItem.jsx";

const DishDetail = () => {

    const [dishes, setDishes] = useState(dishesData)

    let location = +(useLocation().pathname.split("/").pop())


    console.log(location)

    return (
        <div className='catalog'>
            <Link className='button-global-back' to='/'>Back to Home</Link>
            {dishes.length ? dishes.map(dish => (
                    dish.id === location ? <DishItem key={dish.id} dish={dish}/> : <></>
                ))
                : <p>Dish non-exist</p>
            }
        </div>
    )

}

export default DishDetail;