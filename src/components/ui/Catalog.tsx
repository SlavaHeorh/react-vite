import DishItem from "../screens/home/dish-item/DishItem.tsx";
import {IDish} from "../../types/dish.interface";
import {FC} from "react";

interface ICatalog {
    dishes: IDish[]
}

const Catalog: FC <ICatalog> = ({ dishes = [] }) => {
    return (
        <div>
            {dishes.length ? dishes.map(dish =>
                    <DishItem key={dish.id} dish={dish}/>
                )
                : <p>Dish non-exist</p>
            }
        </div>
    )
}

export default Catalog