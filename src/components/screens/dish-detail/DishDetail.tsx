import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import {dishes as dishesData} from "../home/dishes.data.js";
import DishItem from "../home/dish-item/DishItem.js";

const DishDetail = () => {

    const [dishes, setDishes] = useState(dishesData)

    let location = +(useLocation().pathname.split("/").pop())

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