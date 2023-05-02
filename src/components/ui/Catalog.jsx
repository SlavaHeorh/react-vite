import DishItem from "../screens/home/dish-item/DishItem.jsx";

const Catalog = ({dishes}) => {
    return (
        <div>
            {dishes.length ? dishes.map(dish => (
                    <DishItem key={dish.id} dish={dish}/>
                ))
                : <p>Dish non-exist</p>
            }
        </div>
    )
}

export default Catalog