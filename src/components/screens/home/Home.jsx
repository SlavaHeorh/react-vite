import './Home.scss'
import {dishes as dishesData} from './dishes.data.js'
import DishItem from "./dish-item/DishItem.jsx";
import {useContext, useEffect, useMemo, useState} from "react";
import CreateDishForm from "./create-dish-form/CreateDishForm.jsx";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import Header from "../../ui/Header.jsx";
import {useAuth} from "../../../hooks/useAuth.js";
import Catalog from "../../ui/Catalog.jsx";

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
            <Header />
            <CreateDishForm setDishes={setDishes}/>
            <Catalog dishes={dishes}/>
        </div>
    )
}

export default Home;
