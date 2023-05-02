import './Home.scss'
import {dishes as dishesData} from './dishes.data.js'
import DishItem from "./dish-item/DishItem.jsx";
import {useEffect, useMemo, useState} from "react";
import CreateDishForm from "./create-dish-form/CreateDishForm.jsx";

function Home() {
    // how use hook useMemo
    // const filterDishes = useMemo(
    //     () => dishes.filter(dish => dish.price > 15), []
    // )

    const [dishes, setDishes] = useState(dishesData)

    // use hook useEffect
    // useEffect(() => {
    //     const fetchData = await =>
    //     const data = await CarService.getAll()
    //     setDishes(data)
    //     }
    //
    //     fetchData()
    // }, [])

    return (
        <div className='catalog'>
            <h1>Food Catalog</h1>
            <CreateDishForm setDishes={setDishes}/>
            <div>
                {dishes.length ? dishes.map(dish => (
                    <DishItem key={dish.id} dish={dish}/>
                ))
                : <p>Dish non-exist</p>
                }
            </div>
        </div>
    )
}

export default Home;
